
export const validate = (schema, request) => {
    const result = schema.validate(request, {
        abortEarly: false, //untuk mengecek semua kesalahan yang ada dalam request
        allowUnknown: false // untuk memastikan bahwa request hanya mengandung properti yang sudah didefinisikan pada schema 
    });
    if (result.error) {
        const erorrs = result.error.details.map(detail => detail.message)
        return{
            status: 400,
            message: erorrs.join(', ')
        }
    } else {
        return result.value
    }
}