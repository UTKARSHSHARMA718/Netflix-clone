import React from 'react'

interface IOptions {
    label: string | number;
    value: string | number;
    isSelected?: boolean;
}

interface SelectProps {
    options: IOptions[],
    title?: string;
    onChange: (e: any) => void;
    value: string | number;
    customStyles?: string;
}

const Select: React.FC<SelectProps> = ({ options, title, onChange, value, customStyles }) => {

    return (
        <div className={title ? `flex gap-4 flex-col md:flex-row ${customStyles}` : ""}>
            {!!title && <p className='text-red-500 font-semibold capitalize'>{title}:</p>}
            <select className='p-1 rounded-lg font-medium text-white bg-slate-600 outline-none' onChange={(e) => onChange(e?.target?.value)} value={value}>
                {
                    options?.map((option: IOptions) => {
                        return <option value={option?.value} selected={option?.isSelected} key={option?.label}>{option?.label}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select