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

export const EBOOK_BREADCRUMBS = 'EBOOK_BREADCRUMBS'
export const ROUTES = {
   HOME: '/admin',
   APPLICATIONS: '/admin/applications',
   SELLERS: '/admin/sellers',
   SEllERBYID: '/admin/sellers/:sellerId',
   USERS: '/admin/users',
   USERBYID: '/admin/users/:userId',
   BOOKS: '/admin/books',
   VENDOR_AREA: '/vendor/vendorarea',
   BOOK_PAGE: '/vendor/bookpage',
   ADD_BOOK: '/vendor/bookadd',
   PROFILE: '/vendor/profile',
   SIDE_DRAWER_DATA: [
      {
         route_Activeicon: APPLICATION,
         route_icon: APPLICATIONS,
         route_name: 'Заявки',
         route_path: '/admin/applications',
         activeKey: 'application',
      },
      {
         route_Activeicon: SELLER,
         route_icon: SELLERS,
         route_name: 'Продавцы',
         route_path: '/admin/sellers',
         activeKey: 'sellers',
      },
      {
         route_Activeicon: USER,
         route_icon: USERS,
         route_name: 'Пользователи',
         route_path: '/admin/users',
         activeKey: 'users',
      },
      {
         route_Activeicon: BOOK,
         route_icon: BOOKS,
         route_name: 'Книги',
         route_path: '/admin/books',
         activeKey: 'books',
      },
   ],
}
export const NAVICON = {
   APPLICATIONS,
   APPLICATION,
   SELLERS,
   SELLER,
   USERS,
   USER,
   BOOKS,
   BOOK,
}

export const SIDE = {
   App: 'application',
   Sell: 'sellers',
   User: 'users',
   Books: 'books',
}

export const Search = {
   orangeSearchIcon: ORANGESEARCH,
   searchIcon: SEARCH,
}

const IS_LOGIN = 'isLogin'
const IS_VENDOR = 'isVendor'
const IS_USER = 'isUser'
const NAME = 'name'
const EMAIL = 'email'
const PASSWORD = 'password'
const CONFIRMPASSWORD = 'confirmpassword'
const PHONE = 'phone'
const SURNAME = 'surname'
const PICTURE = 'PICTURE'
const IS_AUDIOBOOK = 'ISAUDIOBOOK'
const IS_PAPPERBOOK = 'ISPAPPERBOOK'
const IS_ELECTROBOOK = 'ISELECTROBOOK'

export {
   IS_LOGIN,
   IS_USER,
   IS_VENDOR,
   NAME,
   EMAIL,
   PASSWORD,
   CONFIRMPASSWORD,
   PHONE,
   SURNAME,
   PICTURE,
   IS_AUDIOBOOK,
   IS_PAPPERBOOK,
   IS_ELECTROBOOK,
}
