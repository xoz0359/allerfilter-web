import { useEffect, useState } from 'react'

function useImprovementForm({ initForm }) {

    const [form, setForm] = useState(initForm || {})
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setForm(initForm)
    }, [initForm])

    const validate = () => {
        if (!form.name) {
            return "제품명을 입력해주세요"
        }
        if (!form.category) {
            return "제품유형을 입력해주세요"
        }
        if (!form.barcode) {
            return "바코드를 입력해주세요"
        }
        if (!/^\d+$/.test(form.barcode)) {
            return "바코드는 숫자만 입력가능합니다."
        }
        if (!form.reportNumber) {
            return "품목제조보고번호를 입력해주세요"
        }
        if (!form.rawMaterial) {
            return "원재료를 입력해주세요"
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const submit = async () => {

        const validationError = validate()
        if (validationError) {
            throw  "입력 타입 에러 발생: " + validationError
        }

        setloading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:8081/allerfilter/api/improvements', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await response.json()
            return data


        } catch (e) {
            throw e
        } finally {
            setloading(false)
        }
    }


    return { form, handleChange, submit, loading, error }
}
export default useImprovementForm