=== WP REST Menus ===
Contributors: skapator
Tags: wp-rest-menus, wp-rest-api, v2, api, wp-rest-menus, wp-api-menus, json-rest-api, menu-api-routes, menus, REST, wp-api, wp-json, acf, wpml, polylang
Requires at least: 5.0
Tested up to: 5.9
Requires PHP: 5.6
Stable tag: 1.0.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add menus endpoints to WP REST API

== Description ==

This plugin adds new endpoints for WordPress registered menus.
Usefull when building SPAs with Vuejs, React or any front-end framework.
Works with Advacned Custom Fields, WPML, Polylang

The new endpoints available:

**Get all menus**
`
GET /menus/v1/menus

// Response sample
{  
    term_id: 2,
    name: "Main Menu",
    slug: "main-menu",
    term_group: 0,
    term_taxonomy_id: 2,
    taxonomy: "nav_menu",
    description: "",
    parent: 0,
    count: 8,
    filter: "raw"
},
...
`

**Get a menus items by id (term_id)**
`
GET /menus/v1/menus/<id>

// Response sample
{  
    ID: 5,
    post_author: "1",
    post_date: "2018-07-03 06:42:18",
    post_date_gmt: "2018-07-03 06:42:18",
    filter: "raw",
    db_id:5,
    menu_item_parent: "0",
    object_id: "5",
    object: "custom",
    type: "custom",
    type_label: "Custom Link",
    title: "Home",
    url: "https:\/\/wp-rest-menu.local\/",
    target: "",
    attr_title: "",
    description: "",
    classes: [  
     ""
    ],
    xfn: "",
    meta: null
},
...
`

**Get all menu locations**
All menu locations assigned  in /wp-admin/nav-menus.php?action=locations
`
GET /menus/v1/menus/locations is deprecated and will be removed in newer versions use:
GET /menus/v1/locations

// Response example
{  
    slug: "top",
    description: "Top Menu"
},
{  
    slug: "social",
    description: "Social Links Menu"
}
...
`

**Get all menu location items**
All menu locations assigned in /wp-admin/nav-menus.php?action=locations
`
GET /menus/v1/menus/locations/<slug> is deprecated and will be removed in newer versions use:
GET /menus/v1/locations/<slug>

// Response samexampleple
{  
    ID: 5,
    post_author: "1",
    post_date: "2018-07-03 06:42:18",
    post_date_gmt: "2018-07-03 06:42:18",
    filter: "raw",
    db_id:5,
    menu_item_parent: "0",
    object_id: "5",
    object: "custom",
    type: "custom",
    type_label: "Custom Link",
    title: "Home",
    url: "https:\/\/wp-rest-menu.local\/",
    target: "",
    attr_title: "",
    description: "",
    classes: [  
     ""
    ],
    xfn: "",
    meta: null
},
...
`

There are two filters availiable:

**Fields Filter**
`
// it will return only the fields specified
GET /menus/v1/menus/<id>/?fields=ID,title,meta

// Response sample
// Response sample
{  
    ID: 5,
    title: "Home",
    meta: null
},
...
`

**Nested Items Filter**
`
// it will return menu items parents and nested children in a 'children' field
// Currently only one level deep is supported
GET /menus/v1/menus/<id>/?nested=1

// Response sample
{  
  ID: 1716,
  menu_item_parent: "0",
  object_id: "174",
  object: "page",
  title: "Level 1",
  meta: {  
     vue_component: "LevelComponent",
     menu-item-field-01: "Field 1 value",
     menu-item-field-02: "Field 2 value"
  },
  children:[  
     {  
        ID: 1717,
        menu_item_parent: "1716",
        object_id: "744",
        object: "page",
        title: "Level 2b",
        meta : {  
           vue_component: null
        }
     },
     ...
  ]
},
...
`

**WP filter hooks**

This plugin is quite configurable and provides lots of wp filter hooks from returned data in responses for each endpoint to params validation and endpoint permissions.

`
add_filter( 'wprm/get_menus/wp_get_nav_menus/args', 'my_wp_get_nav_menus', 10, 1 );
(used in GET /menus/v1/menus)

function my_wp_get_nav_menus( $args ) {
    // do something with wp_get_nav_menus $args array
    return $args;
}
`

`
add_filter( 'wprm/get_menus', 'my_get_menus', 10, 1 );
(used in GET /menus/v1/menus)

function my_get_menus( $menus ) {
    // do something with $menus array

    return $menus; // WP_Error|WP_HTTP_Response|WP_REST_Response|mixed
}
`

`
add_filter( 'wprm/get_menu_locations', 'my_get_menu_locations', 10, 1 );
(used in GET /menus/v1/locations)

function my_get_menu_locations( $locations ) {
    // You can modify the $locations array response (get_registered_nav_menus())
    
    return $locations; // WP_Error|WP_HTTP_Response|WP_REST_Response|mixed
}
`

`
add_filter( 'wprm/get_menu_items', 'my_get_menu_items', 10, 1 );
(used in GET /menus/v1/menus/<id>)

function my_rest_menu_item_fields( $menu ) {
    // You can modify the $menu items

    return $menu;
}
`

`
add_filter( 'wprm/get_location_menu_items', 'my_get_location_menu_items', 10, 1 );
(used in GET /menus/v1/menus/<id>)

function my_get_location_menu_items( $menu ) {
    // You can modify the locations $menu items

    return $menu;
}
`

`
add_filter( 'wprm/get_item_fields/filter_fields', 'my_filter_fields', 10, 1 );
(used to filter return field -node edges-)

function my_filter_fields( $fields ) {
    // You can modify the $fields array so
    // you can filter the return fields for all endpoints
    // without using the url param ?fields
    
    $fields = array( 'ID', 'title' );
    return $fields;
}
`

More filters
`
apply_filters('wprm/get_menus/permissions', '__return_true', $request );
apply_filters('wprm/get_menu_locations/permissions', '__return_true', $request );
apply_filters('wprm/get_menu_items/permissions', '__return_true', $request );
apply_filters('wprm/get_menu_items/validate/args/id', is_numeric( $param ), $param, $request, $key );
apply_filters('wprm/get_menu_items/validate/args/fields', is_string( $param ), $param, $request, $key );
apply_filters('wprm/get_menu_items/validate/args/nested', absint( $param ), $param, $request, $key );
apply_filters('wprm/get_location_menu_items/permissions', '__return_true', $request );
apply_filters('wprm/get_location_menu_items/validate/args/slug', is_string( $param ), $param, $request, $key );
apply_filters('wprm/get_location_menu_items/validate/args/fields', is_string( $param ), $param, $request, $key );
apply_filters('wprm/get_location_menu_items/validate/args/nested', absint( $param ), $param, $request, $key );
apply_filters('wprm/get_location_menu_items/permissions', '__return_true', $request );
apply_filters('wprm/get_location_menu_items/validate/args/slug', is_string( $param ), $param, $request, $key );
apply_filters('wprm/get_location_menu_items/validate/args/fields', is_string( $param ), $param, $request, $key );
apply_filters('wprm/get_location_menu_items/validate/args/nested', absint( $param ), $param, $request, $key );
`


Supports custom fields and Advanced Custom Fields
If ACF is installed the response node edge is *acf* else *meta*
In newer version these two edges will co exist and the plugin will separate natively registered custom fields ad acf registered ones.

== Installation ==

There are no requirements other than Wordpress and one active menu. Installation is simple:

1. Upload the `wp-rest-menus` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= How do I use this plugin? =

It creates endpoints for wp nav menus to use in your front end.

= Can I contribute? =

Yes, you can fork it on [github](https://github.com/kostasxyz/wp-rest-menus).
