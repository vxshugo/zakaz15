import React, {useState} from 'react'
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";


const RP = () => {

    const docs = [
        {
            uri: require("./РК.pdf"),
            fileName: " "
        }, // Local File
        {
            uri: require("./РК2.pdf"),
            fileName: " "
        }, // Local File
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (
        <div className='lesson'>
            <div className="head">
                <h4>РК</h4>
            </div>
            <div className="docView">
                <div className="wrapper">
                    <DocViewer className='my-doc-viewer-style' documents={docs} activeDocument={activeDocument}
                               pluginRenderers={DocViewerRenderers} onDocumentChange={handleDocumentChange}/>
                </div>
            </div>
        </div>
    )
}

export default RP