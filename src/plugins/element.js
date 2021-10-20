import {
    Button, Input, Form, FormItem, Header, Footer, Main, Container, Menu, MenuItem, Icon, Select, Submenu,
    Aside, BreadcrumbItem, Checkbox, Message, MenuItemGroup, Breadcrumb, Option, Dropdown, DropdownMenu,
    DropdownItem, Table, TableColumn, Drawer, MessageBox
} from "element-ui"

export default {
    install(Vue) {

        Vue.use(Input)
        Vue.use(Drawer)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Option)
        Vue.use(Dropdown)
        Vue.use(Checkbox)
        Vue.use(Button)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Header)
        Vue.use(Footer)
        Vue.use(Main)
        Vue.use(Container)
        Vue.use(Menu)
        Vue.use(MenuItem)
        Vue.use(Icon)
        Vue.use(Submenu)
        Vue.use(Select)
        Vue.use(BreadcrumbItem)
        Vue.use(Aside)
        Vue.use(MenuItemGroup)
        Vue.use(Breadcrumb)
        Vue.prototype.$Message = Message
        Vue.prototype.$confirm = MessageBox
    }
}