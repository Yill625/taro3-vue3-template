interface List {
  name: string
  id: number
  active: boolean
  disable: boolean
}

export interface Sku {
  id: number
  name: string
  list: List[]
}

export interface Goods {
  skuId: string
  price: string
  imagePath: string
}

interface RootObject {
  Sku: Sku[]
  Goods: Goods
}

export const getGoods = async (): Promise<RootObject> => {
  return await {
    Sku: [
      {
        id: 1,
        name: '颜色',
        list: [
          { name: '亮黑色', id: 100016015112, active: true, disable: false },
          { name: '釉白色', id: 100016015142, active: false, disable: false },
          { name: '秘银色', id: 100016015078, active: false, disable: false },
          { name: '夏日胡杨', id: 100009064831, active: false, disable: false },
          { name: '秋日胡杨', id: 100009064830, active: false, disable: false },
        ],
      },
      {
        id: 2,
        name: '版本',
        list: [
          { name: '8GB+128GB', id: 100016015102, active: true, disable: false },
          { name: '8GB+256GB', id: 100016015122, active: false, disable: false },
        ],
      },
      {
        id: 3,
        name: '版本',
        list: [
          { name: '4G（有充版）', id: 100016015103, active: true, disable: false },
          { name: '5G（有充版）', id: 100016015123, active: false, disable: false },
          { name: '5G（无充版）', id: 100016015104, active: true, disable: true },
          { name: '5G（无充）质保换新版', id: 100016015125, active: false, disable: false },
        ],
      },
    ],
    Goods: {
      skuId: '100016015112',
      price: '4599.00',
      imagePath:
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/210630/17/8651/208682/618a5bd6Eddc8ea0e/b5e55e1a03bc0126.jpg!q80.dpg.webp',
    },
  }
}
