import './blogwrite.css';
import Footer from "../../components/blog/footer/Footer";
import Header from '../../components/blog/header/Header';
import WorkBar from '../../components/blog/workbar/WorkBar';
import React from "react";
import { useState, useEffect, useRef, useCallback } from 'react';
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/react-editor";

function BlogWrite(){
    const [contents, setContents] = useState('');
    const contentsRef = useRef(null);

    const handleChange = () => {
        const editorHtml = contentsRef.current.getInstance().getHTML();
        setContents(editorHtml);
    };

    return (
        <div id='blogwrite'>
            <Header type="write" />
            {/* <WorkBar /> */}
            <section>
                <input className='title' placeholder='제목을 입력해주세요' />
                {/* <input className='contents' placeholder='내용을 입력해주세요' /> */}
                <div className='container'>
                    <Editor
                        // className="contents"
                        ref={contentsRef}
                        placeholder="내용을 입력해주세요"
                        height='45rem'
                        previewStyle={window.innerWidth > 1000 ? "vertical" : "tab"}
                        initialEditType="markdown"
                        hideModeSwitch={true}
                        toolbarItems={[
                        ["heading", "bold"],
                        ['ul', 'ol', 'task'],
                        ["hr", "quote"],
                        ["table", "image", "link"],
                        ]}
                        theme="white"
                        usageStatistics={false}
                        onChange={handleChange}
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default BlogWrite;