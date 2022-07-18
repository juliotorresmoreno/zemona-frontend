
import React, { useRef } from 'react';
import { Editor, IAllProps } from '@tinymce/tinymce-react';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type WYSIWYGEditorProps = Omit<IAllProps, 'onChange'> & {
    onChange?: (value: string) => void
};

const WYSIWYGEditor: React.FC<WYSIWYGEditorProps> = (props) => {
    const editorRef = useRef<any>(null);
    const onChange = (event: any) => {
        if (!props.onChange) return;
        props.onChange(event.level.content);
    }
    return (
        <Editor
            initialValue=""
            init={{
                height: 500,
                menubar: false,
                plugins: [
                ],
                toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            {...props}
            ref={editorRef}
            apiKey='hcm5w7k3cj0dmg0yls3xiais76r5a7uztzd8me72iaplg2cx'

            onChange={onChange}
        />
    );
}

export default WYSIWYGEditor;