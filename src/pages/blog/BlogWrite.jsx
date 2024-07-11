import './blogwrite.css';
import Footer from "../../components/blog/footer/Footer";
import Header from '../../components/blog/header/Header';
import WorkBar from '../../components/blog/workbar/WorkBar';

function BlogWrite(){
    return (
        <div id='blogwrite'>
            <Header type="write" />
            <WorkBar />
            <section>
                <input className='title' placeholder='제목을 입력해주세요' />
                <input className='contents' placeholder='내용을 입력해주세요' />
            </section>
            <Footer />
        </div>
    );
}

export default BlogWrite;