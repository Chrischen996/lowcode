import { create } from 'zustand'
import { createJSonStorage, persist } from 'zustand/middleware'

export interface Component {
    /**
 * 组件唯一标识
 */
    id: number;
    /**
     * 组件唯一标识
     */
    name: string;
    /**
     * 组件属性
     */
    props: any;
    /**
     * 子组件
     **/
    children?: Component[];
    /**
     * 子组件
     **/
    parentId?: number;
    /**
     * 组件描述
     **/
    desc?: string;
    hidden?: {
        type: 'static' | 'variable';
        value: any;
    }
}