export class BaseRules {
  setGlobalId(id: string): string {
    const bufferId = Buffer.from(id, 'utf-8');
    return bufferId.toString('base64');
  }

  setLocalId(id: string): string {
    const bufferId = Buffer.from(id, 'base64');
    return bufferId.toString('utf-8');
  }
}
