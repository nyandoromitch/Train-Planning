<?php
    //////////////////////////////////////////////////////////////////////////////
    //
    // TrackMe Google Maps Display Configuration
    // Version: 1.20
    // Date:    12/22/2007
    // Time:    16:00:00
    //
    // TrackMe built by Staryon
    // For more information go to:
    // http://forum.xda-developers.com/showthread.php?t=340667
    //
    // Please feel free to modify the index.php file to meet your needs.
    // Post comments and questions to the forum thread above.
    //
    //////////////////////////////////////////////////////////////////////////////
    
    // Database Information
    $DBIP         = "localhost:3306";
    $DBUSER       = "root";
    $DBPASS       = "";
    $DBNAME       = "nkomo_data";
    
    // Google API Key. Obtain from http://www.google.com/apis/maps/signup.html
    $googleapikey = "AIzaSyCNn98gCurIFopRbFt6v7nFxK02teSg6Eo";
    
    // if you have Google Analytics Account. Obtain from https://www.google.com/analytics/home/?et=reset&hl=en-US
    // or just leave blank if you do not want to use
    $googleanalyticsaccount   = "";
    
    // Google Maps default view (ROADMAP, SATELLITE, HYBRID or TERRAIN)
    $googleview   = "ROADMAP";
    
    //to show all map points when you arrive at the page and when you change trips
    //0=dont show,  1=show
    $showmap="yes";
    // Map style
    $mapwidth     = "700px";
    $mapheight    = "500px";
    $mapborder    = "1px";
    $bordercolor  = "#fff";
    $mapalign     = "center";
    
    // Background color for map display
    $bgcolor      = "#cccccc";
    
    // Show bearing arrows on map (yes or no)
    $show_bearings    = "yes";
    
    // Display crosshair at map center (yes or no)
    $crosshair    = "yes";
    
    // Click to center map (yes or no)
    $clickcenter  = "yes";
    
    // Map auto-refresh in seconds (0 for manual refresh)
    $refresh      = "120";
    
    // Public Page Access (yes or no)
    $public_page  = "yes";
    
    // Date Display Format
    // Must be valid php date format (http://us.php.net/date)
    $date_format  = "d/m/Y H:i:s";
    
    // Units (imperial or metric)
    $units        = "metric";
    
    // Language (English, Italian, German, French or Spanish)
    $language     = "english";
    
    // Allow customization of display (yes or no)
    $allow_custom = "yes";
?>
