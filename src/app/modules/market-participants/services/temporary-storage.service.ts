import {Injectable} from '@angular/core';

interface StorageCache {
  [key: string]: any;
}

@Injectable()
export class TemporaryStorageService {

  private storage: SessionStorageWrapper;

  constructor() {
    this.storage = new SessionStorageWrapper();
  }

  public forKey(key: string): TemporaryStorageFacet {
    return (new TemporaryStorageFacet(key, this.storage));
  }

  public get<T>(key: string): T | null {
    return (this.storage.get<T>(key));
  }

  public remove(key: string): void {
    this.storage.remove(key);
  }

  public set(key: string, value: any): void {
    this.storage.set(key, value);
  }

}

export class TemporaryStorageFacet {

  private readonly key: string;
  private storage: SessionStorageWrapper;

  constructor(key: string, storage: SessionStorageWrapper) {

    this.key = key;
    this.storage = storage;

  }

  public get<T>(): T | null {
    return (this.storage.get<T>(this.key));
  }

  public remove(): void {
    console.log('TemporaryStorageFacet remove');
    this.storage.remove(this.key);
  }


  public set(value: any): void {
    this.storage.set(this.key, value);
  }

}


class SessionStorageWrapper {

  private cache: StorageCache;
  private storageKey: string;

  constructor() {
    this.cache = Object.create(null);
    this.storageKey = 'temp_session_storage';
    this.loadFromCache();
  }

  // Получить значение по ключу; или null, если ключ не определен
  public get<T>(key: string): T | null {
    return (<T>this.cache[key] ?? null);
  }

  // Записать переданное значение с переданным ключом
  public set(key: string, value: any): void {
    this.cache[key] = value;
    this.persistToCache();
  }

  // Удалить значение по ключу
  public remove(key: string): void {

    if (key in this.cache) {
      delete (this.cache[key]);
      this.persistToCache();
    }

  }

  // Значение хранится в кэше
  private loadFromCache(): void {

    try {
      const serializedCache = sessionStorage.getItem(this.storageKey);
      if (serializedCache) {
        Object.assign(this.cache, <StorageCache>JSON.parse(serializedCache));
      }

    } catch (error) {
      console.warn('SessionStorageWrapper was unable to read from SessionStorage API.');
      console.error(error);
    }

  }

  private persistToCache(): void {

    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify(this.cache));
    } catch (error) {
      console.warn('SessionStorageWrapper was unable to write to SessionStorage API.');
      console.error(error);
    }

  }

}

