import * as React from 'react';
import { Input, Button, Form } from 'antd';
import styles from './index.scss';
import { RangeSearchProps } from '@/interfaces/range';

interface SearchFilterProps {
  searchProps: RangeSearchProps;
  changeSearchProps: (searchProps: RangeSearchProps) => void;
  onSearch: () => void;
}

const FormItem = Form.Item;

export default class SearchFilter extends React.PureComponent<SearchFilterProps> {
  render() {
    const { onSearch, changeSearchProps } = this.props;
    return (
      <Form layout="inline" className={styles.filterPanel}>
        <FormItem>
          <div className={styles.filterItem}>
            <span className={styles.label}>场地名称：</span>
            <Input
              id="rangeName"
              allowClear={true}
              placeholder="请输入场地名称"
              onChange={e => changeSearchProps({ rangeName: e.target.value })}
            />
          </div>
        </FormItem>

        <FormItem>
          <div className={styles.filterItem}>
            <span className={styles.label}>场地位置：</span>
            <Input
              id="rangeLocation"
              allowClear={true}
              placeholder="请输入场地位置"
              onChange={e => changeSearchProps({ rangeLocation: e.target.value })}
            />
          </div>
        </FormItem>

        <FormItem>
          <div className={styles.filterItem}>
            <span className={styles.label}>状态编码：</span>
            <Input
              id="status"
              allowClear={true}
              placeholder="请输入状态编码"
              onChange={e => changeSearchProps({ status: e.target.value })}
            />
          </div>
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={onSearch}>
            查询
          </Button>
        </FormItem>
      </Form>
    );
  }
}
