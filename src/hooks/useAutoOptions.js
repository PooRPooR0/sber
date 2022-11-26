import { useSelector } from "react-redux"

function useAutoOptions(fieldOptionName) {
    const positions = useSelector((state) => state.positions.value)
    const units = useSelector((state) => state.units.value)

    const autoOptions = (fieldOptionName) => {
        switch (fieldOptionName) {
            case "positions": return positions
            case "units": return units
            default: return []
        }
    }

    return {autoOptions, positions, units}
}

export default useAutoOptions