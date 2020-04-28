/*
 * @Author: your name
 * @Date: 2020-04-26 09:53:47
 * @LastEditTime: 2020-04-27 23:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /competition-project-manager-frontend-master/src/stores/range.store.ts
 */
import { observable } from 'mobx';
import { RangeModel } from '@/interfaces/range';
import { Pagination, initalPaginationValue } from '@/interfaces/common';


export class RangeStore {
  // 正在获取数据状态
  @observable
  public loading: boolean;

  // Range场地分页列表数据
  @observable
  public pageData: Pagination<RangeModel> = initalPaginationValue;

}
