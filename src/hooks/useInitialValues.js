import { useSelector } from "react-redux"
import useAutoOptions from "./useAutoOptions"

function useInitialValues(useFilterShow = false, data={}) {
    const fields = useSelector((state) => state.fields.value)
    const { positions, units } = useAutoOptions()

    const filteredFields = useFilterShow ? fields.filter(field => field.showInDetails) : fields

    return filteredFields.reduce((acc, field) => {
        switch (field.name) {
            case 'birthday': return { ...acc, birthday: data.birthday || (new Date()).toISOString().slice(0, 10) }
            case 'tabel': return { ...acc, tabel: data.tabel || Date.now() }
            case 'position': return { ...acc, position: data.position || positions[0] }
            case 'unit': return { ...acc, unit: data.unit || units[0] }
            default: return { ...acc, [field.name]: data[field.name] || "" }
        }
    }, {})
}

export default useInitialValues