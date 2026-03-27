import { useState, useEffect } from 'react'

import useImprovementForm from '../../../hooks/useImprovementForm'

function ImprovementForm({ product }) {

    const [initForm, setFormData] = useState({
        id: "",
        reportNumber: "",
        name: "",
        category: "",
        barcode: "",
        rawMaterial: "",
        allergen: "",
        comment: ""
    })

    useEffect(() => {
        if (product) {
            setFormData({
                id: product.id ?? "",
                reportNumber: product.reportNumber ?? "",
                name: product.name ?? "",
                barcode: product.barcode ?? "",
                category: product.category ?? "",
                rawMaterial: product.rawMaterial ?? "",
                allergen: product.allergen ?? ""
            })
        }
    }, [product])

    const { form,
        handleChange,
        submit,
        loading,
        error
    } = useImprovementForm({ initForm })

    const handleSubmit = async () => {
        try {
            const result = await submit()
            alert("제출 완료!")

            if (result) {
                if (result.resultCode === "OK") {
                    console.log(result)
                } else {
                    throw "서버 에러 발생: " + result.data
                }
            }
        } catch (e) {
            throw e
        }
    }

    return (
        <div>
            <li>
                <span>제품명</span>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </li>
            <li>
                <span>제품유형</span>
                <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                />
            </li>
            <li>
                <span>바코드</span>
                <input
                    name="barcode"
                    value={form.barcode}
                    onChange={handleChange}
                />
            </li>
            <li>
                <span>품목제조보고번호</span>
                <input
                    name="reportNumber"
                    value={form.reportNumber}
                    onChange={handleChange}
                />
            </li>
            <li>
                <span>원재료</span>
                <input
                    name="rawMaterial"
                    value={form.rawMaterial}
                    onChange={handleChange}
                />
            </li>
            <li>
                <span>알레르기</span>
                <input
                    name="allergen"
                    value={form.allergen}
                    onChange={handleChange}
                />
            </li>
            <li>
                <span>기타 의견</span>
                <textarea
                    name="comment"
                    value={form.comment}
                    placeholder="의견을 입력하세요"
                    onChange={handleChange}
                />
            </li>
            <button onClick={handleSubmit}>
                전송
            </button>
        </div>
    )
} export default ImprovementForm