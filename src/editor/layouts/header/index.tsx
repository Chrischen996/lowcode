import { Button, Space } from 'antd'
import React from 'react'
const Header: React.FC = () => {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className='flex justify-between px-[24px] items-center h-[50px]'>
                <div className="flex-1">lowcode</div>
                <Space className='flex-1 flex justify-end'>
                    <Button type="primary">查看大纲</Button>
                    <Button type="primary">定义变量</Button>
                    <Button type="primary">预览</Button>
                </Space>

            </div>
        </div>
    )
}

export default Header