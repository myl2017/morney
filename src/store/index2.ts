import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

console.log('index2.ts 执行了一次');

const store = {
  ...recordStore,
  ...tagStore,
};

export default store;