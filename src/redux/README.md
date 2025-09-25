Tất cả các items sẽ được lưu lại hết vào state
r.items.map((value, index) => merge.items[((page - 1) * merge.query.limit) + index] = new AdminModel(value))

Khi lưu như thế này thì phải check xem liệu có filter không, nếu có thì phải xóa danh sách cũ trước, vì phải ghi đè vào

                    if (query) {
                        if (
                            (query.filter && Object.keys(query.filter).length > 0)
                            || (query.sort && query.sort.length > 0)
                            || (query.order && query.order.length > 0)
                        ) {
                            if (page === 1) {
                                merge = {
                                    ...merge,
                                    items: []
                                }

                                console.log('%cReset Item When Filter: GetAdminAction', Color.ConsoleInfo)
                            }
                        }
                    }