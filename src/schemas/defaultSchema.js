import * as Yup from "yup"

export default function getDefaultSchema(fields) {
    return Yup.object().shape(fields.reduce((acc, field) => {
        switch (field.type) {
            case 'number': return {
                ...acc, [field.name]: Yup.number("Введите число")
                    .integer("Требуется целое число")
                    .positive("Должно быть больше 0")
                    .required('Требуется')
            }
            case 'date': return { ...acc, [field.name]: Yup.date("Введите дату").max(new Date(), "Неправильная дата").required('Требуется') }
            default: return { ...acc, [field.name]: Yup.string("Введите строку").required('Требуется') }
        }
    }, {}))
}