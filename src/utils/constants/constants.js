import APPLICATIONS from '../../assets/icons/applications.svg'
import APPLICATION from '../../assets/icons/application.svg'
import SELLERS from '../../assets/icons/sellers.svg'
import SELLER from '../../assets/icons/seller.svg'
import USERS from '../../assets/icons/users.svg'
import USER from '../../assets/icons/user.svg'
import BOOKS from '../../assets/icons/books.svg'
import BOOK from '../../assets/icons/book.svg'
import ORANGESEARCH from '../../assets/icons/orangeSearchIcon.svg'
import SEARCH from '../../assets/icons/searchIcon.svg'

export const ROUTES = {
    HOME: '/admin',
    APPLICATIONS: '/admin/applications',
    SELLERS: '/admin/sellers',
    USERS: '/admin/users',
    BOOKS: '/admin/books',
    SIDEDRAWERDATA: [
        {
            route_Activeicon: APPLICATION,
            route_icon: APPLICATIONS,
            route_name: 'Заявки',
            route_path: '/admin/applications',
            activeKey: 'application'
        },
        {
            route_Activeicon: SELLER,
            route_icon: SELLERS,
            route_name: 'Продавцы',
            route_path: '/admin/sellers',
            activeKey: 'sellers'
        },
        {
            route_Activeicon: USER,
            route_icon: USERS,
            route_name: 'Пользователи',
            route_path: '/admin/users',
            activeKey: 'users'
        },
        {
            route_Activeicon: BOOK,
            route_icon: BOOKS,
            route_name: 'Книги',
            route_path: '/admin/books',
            activeKey: 'books'
        }
    ]
}
export const NAVICON = {
    APPLICATIONS: APPLICATIONS,
    APPLICATION: APPLICATION,
    SELLERS: SELLERS,
    SELLER: SELLER,
    USERS: USERS,
    USER: USER,
    BOOKS: BOOKS,
    BOOK: BOOK
}

export const SIDE = {
    App: 'application',
    Sell: 'sellers',
    User: 'users',
    Books: 'books'
}

export const Search = {
    orangeSearchIcon: ORANGESEARCH,
    searchIcon: SEARCH
}
