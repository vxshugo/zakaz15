import React, {useState} from 'react'
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";


const SRS = () => {

    const docs = [
        {
            uri: require("./срс.pdf"),
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
                <h4>СӨЖ</h4>
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

export default SRS