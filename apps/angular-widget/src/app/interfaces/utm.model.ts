export interface Certificate {
  certType: string;
  startDate: string;
  expireDate: string;
  // valid, invalid, revoked (for RSA)
  isValid: string;
  issuer?: string;
}

export interface DbUtm {
  createDate: string;
  ownerId: string;
}

export interface UTMInfo {
  version: string;
  contour: string;
  ownerId: string;
  rsaError?: string | null;
  db: DbUtm;
  checkInfo?: string | null;
  license: boolean;
  rsa: Certificate;
  gost: Certificate;
}

export const utmInfo: UTMInfo = {
  version: '4.0.1-SNAPSHOT',
  contour: 'test',
  rsaError: null,
  checkInfo: null,
  ownerId: '030000251157',
  db: {
    createDate: '2019-10-16 11:51:20.116',
    ownerId: '030000251157',
  },
  rsa: {
    certType: 'RSA',
    startDate: '2019-10-17 16:50:29 +0300',
    expireDate: '2020-10-17 17:00:29 +0300',
    isValid: 'valid',
    issuer: 'test.pki.fsrar.ru',
  },
  gost: {
    certType: 'GOST',
    startDate: '2018-11-30 16:42:12 +0300',
    expireDate: '2019-11-30 16:52:12 +0300',
    isValid: 'valid',
  },
  license: true,
};
