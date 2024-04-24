<?php
/**
 * Featured Rentals block template.
 *
 * @param array $block The block settings and attributes.
 */

$car_name                 = !empty(get_field( 'name' )) ? get_field( 'name' ) : 'Unknown Car';
$passenger_count          = !empty(get_field( 'passenger_count' )) ? get_field( 'passenger_count' ) : 0;
$luggage_count            = !empty(get_field( 'luggage_count' )) ? get_field( 'luggage_count' ) : 0;
$door_count               = !empty(get_field( 'door_count' )) ? get_field( 'door_count' ) : 0;
$thumbnail_photo          = !empty(get_field( 'thumbnail_photo' )) ? get_field( 'thumbnail_photo' ) : "/media/not_found.jpg";
$min_daily_rate           = !empty(get_field( 'minimum_daily_rate' )) ? get_field( 'minimum_daily_rate' ) : 0;
$likes                    = !empty(get_field( 'likes' )) ? get_field( 'likes' ) : 0;
$type                     = !empty(get_field( 'type' )) ? get_field( 'type' ) : "Unknown Type";

$class_name = 'featured-rentals';

$styles = array( );
?>

<div class="<?php echo esc_attr( $class_name ); ?>" style="">
    <div class="featured-rentals__col">
        <h1 class="featured-rentals__heading">
            <?php echo esc_html( $car_name ); ?>
        </h1>
        <p>
            <?php echo $passenger_count; ?>
        </p>
        <p>
            <?php echo $luggage_count; ?>
        </p>
        <p>
            <?php echo $door_count; ?>
        </p>
        <img src="<?php echo $thumbnail_photo; ?>" loading="lazy" />
        <p>
            $<?php echo $min_daily_rate; ?>
        </p>
        <p>
            $<?php echo $likes; ?>
        </p>
        <p>
            $<?php echo $type; ?>
        </p>
    </div>
</div>