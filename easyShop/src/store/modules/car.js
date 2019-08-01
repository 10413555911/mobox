//购物车具体功能
import { observable, action } from "mobx";
import { cartIndex, addcar, checked, deletes } from '../../server/index'
export default class List {
    // @observable 修饰属性
    @observable shopping = null; //购物车里所有的商品
    @observable All = null;   //是否全选
    @observable All_pic = null
    @observable All_number = null
    @observable money = null;
    @observable numbers_Zie = null;
    @observable del_All = null
    // @action 修饰方法
    @action cartIndex = async () => {
        let date = await cartIndex()
        this.money = date.data.cartTotal
        this.shopping = date.data.cartList
        this.del_All = this.shopping.filter(item => item.checked)
    }
    @action add = (item) => {       //点击数量改变之后添加  
        item.add_time++
        item.unit_price = item.retail_price * item.add_time
    }
    @action del = (item) => {        //点击数量改变之后减少
        if (item.add_time > 1) {
            item.add_time--
        }
        item.unit_price = item.retail_price * item.add_time
    }
    @action addcar = async (parmas) => {   //添加到购物车
        await addcar(parmas)
    }
    @action select = async (parmas) => {
        if (this.shopping[parmas].checked) {
            this.shopping[parmas].checked = 0
        } else {
            this.shopping[parmas].checked = 1
        }
        this.checked_Shopping({
            isChecked: this.shopping[parmas].checked,
            productIds: this.shopping[parmas].goods_id
        })
        this.All = this.shopping.every(item => item.checked)

    }
    @action checked_Shopping = async (parmas) => {  //是否选中
        let data = await checked(parmas)
        this.numbers_Zie = data.data.cartList
        console.log(data.data.cartList)
        let all = this.numbers_Zie.filter(item => item.checked)
    }
    @action deletes = async (parmas) => {  //是否删除选中
        await deletes(parmas)
    }
}

