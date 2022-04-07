export class ResponseData {
  public success: boolean;
  public statusCode: number;
  public message: string;
  public data?: Array<any> | Object;

  constructor(
    success: boolean,
    statusCode: number,
    message: string,
    data?: Array<any> | Object
  ) {
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
