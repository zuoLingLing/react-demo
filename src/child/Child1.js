import React, { useImperativeHandle, useState, useRef,forwardRef } from 'react';
import { Button } from 'antd';

function Child1(props,ref) {
    const [val, setVal] = useState(0)


    useImperativeHandle(ref, () => {
        return {
            btns: () => {
                return <Button onClick={() => {
                    setVal(1)
                }}>新增</Button>
            }
        }
    })

    return (
        <div>
            {val}
        </div>
    )
}
export default forwardRef(Child1);