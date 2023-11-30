
export const checkPreview = (params, data) => {
  return this.$http.request({
    url: this.$http.adornUrl('/api/v1/preview/checkPreview'),
    method: 'get',
    params: params
  })
}
