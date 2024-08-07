/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect, useState, ChangeEvent, KeyboardEvent } from 'react';
import Modal from '@/components/modal/Modal';
import { CancelIcon } from '@/assets';
import { Button, OutlineBtn } from '@/components/button';
interface modalcompProps {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    onClick: () => void;
    loading: boolean;
    setData: any;
}
interface Language {
    name: string;
    level: string;
}
const AddLanguage: React.FC<modalcompProps> = ({ open, setOpen, onClick, setData, loading, }) => {
    const [languages, setLanguages] = useState<Language[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const handleAddLanguage = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            setLanguages([...languages, { name: inputValue, level: 'beginner' }]);
            setInputValue('');
        }
    };

    const handleRemoveLanguage = (index: number) => {
        const newLanguages = languages.filter((_, i) => i !== index);
        setLanguages(newLanguages);
    };

    const handleChangeLevel = (index: number, level: string) => {
        const newLanguages = languages.map((lang, i) =>
            i === index ? { ...lang, level } : lang
        );
        setLanguages(newLanguages);
    };

    useEffect(() => {
        setData(languages)
    }, [languages])

    return (
        <div className='relative'>
            <Modal open={open} setOpen={setOpen} >
                <div className="w-full flex flex-col ">
                    <div className="flex justify-end">
                        <span onClick={() => setOpen(false)}>
                            <CancelIcon />
                        </span>
                    </div>
                    <div className="lg:w-10/12 w-full mx-auto mt-4 flex flex-col">
                        <h1 className='text-black text-2xl lg:text-4xl font-bold'>
                            Add language
                        </h1>

                        <div className="w-full mt-8 grid grid-cols-1   gap-4  ">
                            <div className={`w-full flex flex-col  `}>

                                <input
                                    type={"text"}
                                    className={`   px-3 py-[15px] flex items-center border border-grey outline-none  placeholder:text-opacity-50 bg-transparent focus:bg-transparent placeholder:text-sm text-black text-sm placeholder:grey_3  h-[56px] rounded-[10px] `}
                                    value={inputValue}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                                    onKeyDown={handleAddLanguage}
                                    placeholder="Type a language and press Enter"
                                />
                            </div>

                        </div>
                        <ul className="space-y-4 mt-6">
                            {languages.map((language, index) => (
                                <li key={index} className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium capitalize">{language.name}</span>
                                    <div className="flex items-center space-x-2">
                                        <label className="flex items-center space-x-1">
                                            <input
                                                type="radio"
                                                name={`level-${index}`}
                                                checked={language.level === 'beginner'}
                                                onChange={() => handleChangeLevel(index, 'beginner')}
                                            />
                                            <span>Beginner</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input
                                                type="radio"
                                                name={`level-${index}`}
                                                checked={language.level === 'intermediate'}
                                                onChange={() => handleChangeLevel(index, 'intermediate')}
                                            />
                                            <span>Intermediate</span>
                                        </label>
                                        <label className="flex items-center space-x-1">
                                            <input
                                                type="radio"
                                                name={`level-${index}`}
                                                checked={language.level === 'expert'}
                                                onChange={() => handleChangeLevel(index, 'expert')}
                                            />
                                            <span>Expert</span>
                                        </label>
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => handleRemoveLanguage(index)}
                                        >
                                            x
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full flex flex-col md:justify-center gap-4 items-center lg:items-center md:flex-row mt-12">
                            <span>
                                <OutlineBtn name='Cancel' onClick={() => setOpen(false)} />
                            </span>
                            <Button name={'Update'} loading={loading} onClick={onClick} disabled={loading} />
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default AddLanguage
