/**
 * 接口返回类型
 */
export type ResType<T> = {
  /** 响应数据 */
  message: string
  /** 响应消息 */
  data: T
  [property: string]: unknown
}
