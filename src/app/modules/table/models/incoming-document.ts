import {autoserializeAs} from 'cerialize';
import {Column} from '../decorators/column';

export class EGAISDocument {
  @autoserializeAs(Number)
  id: string;
  @autoserializeAs(String)
  @Column()
  type: string;
  @autoserializeAs(String)
  @Column()
  state: string;
  @autoserializeAs(String)
  @Column()
  timestamp: string;
}

export class IncomingDocument extends EGAISDocument {
  @autoserializeAs(String)
  @Column()
  replyId: string;
  @autoserializeAs(String)
  @Column()
  fileId: string;
}

export class OutgoingDocument extends EGAISDocument {
  @autoserializeAs(String)
  @Column()
  uuid: string;
}
