import './workbar.css';

function WorkBar(){
    return (
        <div id="workbar">
            <div className="itemBox">
                <img className="picture" src="/markdownAssets/inputPicture.svg" alt="picture" />
                <div className="fontsizeBox">
                    <p>H1</p><p>H2</p><p>H3</p><p>H4</p>
                </div>
                <div className="fonteditBox">
                    <img className="bold" src="/markdownAssets/ph_text-b-bold.svg" />
                    <img className="underline" src="/markdownAssets/lucide_underline.svg" />
                </div>
            </div>
        </div>
    );
}

export default WorkBar