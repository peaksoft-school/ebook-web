const DEFAULT_URL = 'http://3.123.114.41/'
const SEND_PAPER_BOOK_URL = 'api/books/save/paper_book'
const SEND_ELECTRONIC_BOOK_URL = 'api/books/save/electronic_book'
const SEND_AUDIO_BOOK_URL = 'api/books/save/audio_book'
const AUTHENTICATION_URL = 'api/authentication'

const GET_ALL_LANGUAGES = 'api/books/languages'
const GET_ALL_BOOKS = 'api/books'
const GET_BOOK_BY_ID = 'api/books/get/'

const UPDATE_VENDOR_BY_ID = 'api/vendor/update/'
const GET_VENDOR_BY_ID = 'api/vendor/getById/'
const GET_ALL_VENDORS = 'api/vendor/getAll'
const DELETE_VENDOR_BY_ID = 'api/vendor/deleteById/'

// This API for saving files {images, audios, electronic_books} to amazon S3 bucket

const UPLOAD_PDF_FILE = 'static/upload/pdf'
const UPLOAD_IMAGE = 'static/upload/image'
const UPLOAD_AUDIO_FILE = 'static/upload/audio'
const UPLOAD_AUDIO_FRAGMENT = 'static/upload/audio/fragment'
const SORT = 'api/books/sort'
// API to use basket only for users with authority CLIENT

const UPDATE_CLIENT_BY_ID = 'api/clients/update/'
const GET_CLIENT_BY_ID = 'api/clients/getById/'
const GET_ALL_CLIENTS = 'api/clients/getAll'
const DELETE_CLIENT_BY_ID = 'api/clients/delete/'

const VENDOR_REGISTRATION = 'api/vendor/signup/vendor'
// genre-api

const ADD_NEW_GENRE_URL = 'api/genres/save'
const UPDATE_GENRE_BY_ID = 'api/genres/update/'
const GET_GENRES = 'api/genres'
const GET_TYPES = 'api/books/types'
const GET_GENRE_BY_ID = 'api/genres/get/'
const DELETE_GENRES = 'api/genres/delete'

// update books
const UPDATE_PAPER_BOOK = 'api/books/update/paper_book/'

// accepted admin
const GET_ASSEPTED_BOOKS = 'api/admin/get/books/accepted'
// get Vendor info by token

const GET_VENDOR_INFO = 'api/vendor/show/info'

export const APPLICATIONS = {
   REJECT_APLLICATION: 'api/admin/refuse/book/request',
   ACCEPT_APPLICATION: 'api/admin/accept/book/request',
   GET_ALL_APPLICATIONS: 'api/admin/get/books/requests',
   GET_ALL_ACCEPTED_BOOKS: 'api/admin/get/books/accepted',
}

export {
   DEFAULT_URL,
   SEND_PAPER_BOOK_URL,
   SEND_ELECTRONIC_BOOK_URL,
   SEND_AUDIO_BOOK_URL,
   GET_ALL_CLIENTS,
   GET_ALL_VENDORS,
   GET_BOOK_BY_ID,
   GET_CLIENT_BY_ID,
   SORT,
   GET_GENRES,
   GET_GENRE_BY_ID,
   GET_VENDOR_BY_ID,
   GET_ALL_BOOKS,
   GET_ALL_LANGUAGES,
   UPDATE_CLIENT_BY_ID,
   UPDATE_GENRE_BY_ID,
   UPDATE_VENDOR_BY_ID,
   UPLOAD_AUDIO_FILE,
   UPLOAD_AUDIO_FRAGMENT,
   UPLOAD_IMAGE,
   UPLOAD_PDF_FILE,
   DELETE_CLIENT_BY_ID,
   DELETE_GENRES,
   DELETE_VENDOR_BY_ID,
   ADD_NEW_GENRE_URL,
   UPDATE_PAPER_BOOK,
   GET_TYPES,
   GET_ASSEPTED_BOOKS,
   GET_VENDOR_INFO,
   VENDOR_REGISTRATION,
   AUTHENTICATION_URL,
}
