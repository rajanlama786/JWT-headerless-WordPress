<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'headerlessWP' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Y1|H=2iw->:v$PSg|4!o@e-ca8N)2Q=u:LT_~Y=$;m/#&ZS.7i^D,5dGmvrxPyS9' );
define( 'SECURE_AUTH_KEY',  '6CP!w9Y<I1c%yY:Ypy&U=WW^L}[,&G7|g5;6.30qpJOg:-`{>:xKAqn!}K<@ST-=' );
define( 'LOGGED_IN_KEY',    'ttj%&yDa qC}uyOQ~GNh<k<ij3T(#`n3|NR-_ JM@Da-CC8IBXM4]jfH[A%[tZlS' );
define( 'NONCE_KEY',        'Q<eL7iQ?iHtqcNx0j*~ KC^A/__m?)Mb0D=ta 1-G/})zgeR<ksUI$AGmg<bR:n{' );
define( 'AUTH_SALT',        '(; 7{2t|TW!MVrQ;P]Kr7uIG6s0ZvYr(H=^vV8Um@ZA8Z&<7)~xKOpYl+]x.=j$9' );
define( 'SECURE_AUTH_SALT', 'j#V*_1Ig-pgj+qT!ii*{e}Y/dmM7pmz:I(00i/iKs]T+|8?3XsJsxs^`@Nj:0fqx' );
define( 'LOGGED_IN_SALT',   'LzJqHD;iGas1qqzU3&CERM=RNC{:ItwBVy[ddA}_^b?chjnD+k)88jlz55Jq>F{.' );
define( 'NONCE_SALT',       'NnK#%MN)H;t+RLm@ onxFiRAgAVOP3F6Im/-#/5X$Ls=zT<~wEM_pAamTRc;UjG{' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
