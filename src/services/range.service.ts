/*
 * @Author: 张棋源
 * @Date: 2020-04-23 18:42:31
 * @LastEditTime: 2020-04-28 16:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /competition-project-manager-frontend-master/src/services/place.service.ts
 */

import { action } from 'mobx';
import HttpClient from '../utils/HttpClient';
import { BACKEND_URL, messageFail } from './common';
import { Pagination, initalPaginationValue } from '@/interfaces/common';
import { RangeModel, RangeEditModel, RangeSearchProps } from '@/interfaces/range';
// 这一段是复制粘贴过来的，暂时还不知道作用。
// 底下的也是，基本都和department那个ts的文件一样，只不过都把里面的department改成了place。
// 因为二者本身的地位之一样的，我需要做的就是参照老师的写一个比赛场地管理。

import { RangeStore } from '@/stores/range.store';

export class RangeService {
  public store: RangeStore;
  private http: HttpClient;

  public constructor() {
    this.http = new HttpClient();
    this.store = new RangeStore();
  }

  @action
  public async fetchPageData(searchProps: RangeSearchProps): Promise<boolean> {
    this.store.loading = true;
    this.store.pageData = initalPaginationValue;
    try {
      const result = await this.http.postJSON<Pagination<RangeModel>>(
        `${BACKEND_URL}/range/list`,
        searchProps,
      );
      this.store.loading = false;
      if (result.success) {
        this.store.pageData = result.data;
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      this.store.loading = false;
      messageFail();
      return false;
    }
  }

  @action
  public async update(data: RangeEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/range/update`, data);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }

  @action
  public async add(data: RangeEditModel): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/range/add`, data);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (e) {
      messageFail();
      return false;
    }
  }

  @action
  public async delete(codeList: string[]): Promise<boolean> {
    this.store.loading = true;
    try {
      const result = await this.http.postJSON<String>(`${BACKEND_URL}/range/delete`, codeList);
      this.store.loading = false;
      if (result.success) {
        return true;
      } else {
        messageFail(result.message);
        return false;
      }
    } catch (error) {
      messageFail();
      return false;
    }
  }
}
