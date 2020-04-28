import { PAGE_SIZE } from './common';

/*
 * @Author: 张棋源
 * @Date: 2020-04-24 08:14:51
 * @LastEditTime: 2020-04-28 23:18:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /competition-project-manager-frontend-master/src/interfaces/place.ts
 */

export interface RangeModel {
  //场地编码
  rangeCode: string;
  //场地名称
  rangeName: string;
  //位置
  rangeLocation: string;
  //状态编码
  status: number;
  //状态描述
  statusDesc: string;
  //关闭原因
  closeReason: string;
  //备注
  description: string;
  // 创建时间
  createdAt: string;
  // 创建人
  createdBy: string;
  // 更新时间
  updatedAt: string;
  // 更新人
  updatedBy: string;
}

export interface RangeEditModel {
  //场地编码
  rangeCode?: string;
  //场地名称
  rangeName?: string;
  //位置
  rangeLocation?: string;
  //状态编码
  status?: number;
  //关闭原因
  closeReason?: string;
  //备注
  description?: string;
}

export interface RangeSearchProps {
  rangeName?: string;
  rangeLocation?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}
//  目前只能搜索场地名称，之后可以再去增加。

export const defaultRangeSearchProps: RangeSearchProps = {
  rangeName: undefined,
  rangeLocation: undefined,
  status: undefined,
  page: 1,
  pageSize: PAGE_SIZE,
};
