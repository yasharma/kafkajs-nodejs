export interface ISyncStatus {
  startedAt?: Date;
  type: string;
  status: Status;
  dropdate: string;
  finishedAt?: Date;
  message?: string;
}

export enum Status {
  running = 'running',
  failed = 'failed',
  finished = 'finished',
}
