import './blogwrite.css';
import Footer from "../../components/blog/footer/Footer";
import Header from '../../components/blog/header/Header';
import WorkBar from '../../components/blog/workbar/WorkBar';
import { useState, useEffect, useRef } from 'react';

function BlogWrite(){
    const [value, setValue] = useState('');
    const textareaRef = useRef(null);
    const [contentsHeight, setContentsHeight] = useState(40);

    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = '40rem'
    }, []);

    useEffect(() => {
        const textarea = textareaRef.current;
        
        if (countNewlines(value) >= 20){
            setContentsHeight(contentsHeight + 1.25);
            textarea.style.height = `${contentsHeight}rem`;
        } else if (countNewlines(value) < 20) {
            setContentsHeight(40);
            textarea.style.height = `${contentsHeight}rem`;
        }
    }, [value]);

    const countNewlines = (str) => {
        return (str.match(/\n/g) || []).length; // 개행 문자(\n)의 개수를 세어줍니다.
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div id='blogwrite'>
            <Header type="write" />
            <WorkBar />
            <section>
                <input className='title' placeholder='제목을 입력해주세요' />
                {/* <input className='contents' placeholder='내용을 입력해주세요' /> */}
                <textarea ref={textareaRef} value={value} onChange={handleChange} className='contents' placeholder='내용을 입력해주세요'></textarea>
            </section>
            <Footer />
        </div>
    );
}

export default BlogWrite;