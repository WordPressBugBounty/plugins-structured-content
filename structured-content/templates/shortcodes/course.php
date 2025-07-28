<?php

foreach ( $atts['elements'] as $element ) {

	$title_ID = isset( $element['custom_title_id'] ) && $element['custom_title_id'] !== '' ? sanitize_title( $element['custom_title_id'] ) : sanitize_title( $element['title'] );

	$title = '<' . $atts['title_tag'] . ( $atts['generate_title_id'] ? ' id="' . $title_ID . '"' : '' ) . '>' . esc_attr( $element['title'] ) . '</' . $atts['title_tag'] . '>';

	if ( ! isset( $element['visible'] ) || $element['visible'] == 1 ) : ?>
		<section class="sc_fs_course sc_card <?php echo esc_attr($atts['css_class']); ?> <?php echo esc_attr($atts['className']); ?>">
			<?php echo wp_kses_post($title); ?>
			<p>
				<?php echo wp_kses_post(htmlspecialchars_decode( do_shortcode( $element['description'] ) )); ?>
			</p>
			<?php if ( ! empty( $element['provider_name'] ) && ! empty( $element['provider_same_as'] ) ) : ?>
				<div class="sc_row sc_row--nogrid">
				<div class="sc_grey-box">
					<div class="sc_box-label">
						<?php echo __( 'Provider Information', 'structured-content' ); ?>
					</div>
					<div class="sc_row">
						<div class="sc_input-group">
							<div class="sc_input-label">
								<?php echo __( 'Provider Name', 'structured-content' ); ?>
							</div>
							<div class="wp-block-structured-content-event__location">
								<?php echo wp_kses_post($element['provider_name']); ?>
							</div>
						</div>
						<div class="sc_input-group">
							<div class="sc_input-label">
								<?php echo __( 'Same as (Website / Social Media)', 'structured-content' ); ?>
							</div>
							<div class="wp-block-structured-content-event__sameAs">
								<a href="<?php echo esc_url($element['provider_same_as']); ?>"><?php echo esc_url($element['provider_same_as']); ?></a>
							</div>
						</div>
					</div>
				</div>
				</div>
			<?php endif; ?>

			<?php if ( ! empty( $element['course_instance'] ) ) : ?>
				<div class="sc_row sc_row--nogrid">
				<div class="sc_grey-box">
					<div class="sc_box-label">
						<?php echo __( 'Course Instance', 'structured-content' ); ?>
					</div>
					<div class="sc_row sc_row--three-columns">
						<?php if ( ! empty( $element['course_instance']['name'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Instance Name', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__instance_name">
									<?php echo wp_kses_post($element['course_instance']['name']); ?>
								</div>
							</div>
						<?php endif; ?>
						<?php if ( ! empty( $element['course_instance']['start_date'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Start Date', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__start_date">
									<?php echo wp_kses_post($element['course_instance']['start_date']); ?>
								</div>
							</div>
						<?php endif; ?>
						<?php if ( ! empty( $element['course_instance']['end_date'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'End Date', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__end_date">
									<?php echo wp_kses_post($element['course_instance']['end_date']); ?>
								</div>
							</div>
						<?php endif; ?>
					</div>
					<div class="sc_row">
						<?php if ( ! empty( $element['course_instance']['course_mode'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Course Mode', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__course_mode">
									<?php echo wp_kses_post($element['course_instance']['course_mode']); ?>
								</div>
							</div>
						<?php endif; ?>
						<?php if ( ! empty( $element['course_instance']['course_platform'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Course Platform', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__platform">
									<?php echo wp_kses_post($element['course_instance']['course_platform']); ?>
								</div>
							</div>
						<?php endif; ?>
						</div>
					<div class="sc_row">
						<?php if ( ! empty( $element['course_instance']['course_url'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Course URL', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__url">
									<a href="<?php echo esc_url($element['course_instance']['course_url']); ?>"><?php echo esc_url($element['course_instance']['course_url']); ?></a>
								</div>
							</div>
						<?php endif; ?>
						<?php if ( ! empty( $element['course_instance']['course_schedule'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Course Schedule', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__schedule">
									<?php echo wp_kses_post($element['course_instance']['course_schedule']); ?>
								</div>
							</div>
						<?php endif; ?>
						</div>
					<div class="sc_row">
						<?php if ( ! empty( $element['course_instance']['repeat_count'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Repeat Count', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__repeat_count">
									<?php echo wp_kses_post($element['course_instance']['repeat_count']); ?>
								</div>
							</div>
						<?php endif; ?>
						<?php if (!empty($element['course_instance']['repeat_frequency'])) { ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __('Repeat Frequency', 'structured-content'); ?>
								</div>
								<div class="wp-block-structured-content-course__repeat_frequency">
									<?php echo esc_html($element['course_instance']['repeat_frequency_readable']); ?>
								</div>
							</div>
						<?php } ?>
					</div>
				</div>
				</div>
			<?php endif; ?>

			<?php if ( ! empty( $element['offers'] ) ) : ?>
				<div class="sc_row sc_row--nogrid">
				<div class="sc_grey-box">
					<div class="sc_box-label">
						<?php echo __( 'Offers', 'structured-content' ); ?>
					</div>
					<div class="sc_row">
						<?php if ( ! empty( $element['offers']['price'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Price', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__price">
									<?php 
									$price = $element['offers']['price'];
									$currency = !empty($element['offers']['price_currency']) ? $element['offers']['price_currency'] : 'USD';
									echo wp_kses_post($currency . ' ' . $price); 
									?>
								</div>
							</div>
						<?php endif; ?>
						<?php if ( ! empty( $element['offers']['category'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Category', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__category">
									<?php echo wp_kses_post($element['offers']['category']); ?>
								</div>
							</div>
						<?php endif; ?>
						</div>
					<div class="sc_row">
						<?php if ( ! empty( $element['offers']['availability'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Availability', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__availability">
									<?php echo wp_kses_post($element['offers']['availability']); ?>
								</div>
							</div>
						<?php endif; ?>
						<?php if ( ! empty( $element['offers']['valid_from'] ) ) : ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Valid From', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__valid_from">
									<?php echo wp_kses_post($element['offers']['valid_from']); ?>
								</div>
							</div>
						<?php endif; ?>
					</div>
					<?php if ( ! empty( $element['offers']['url'] ) ) : ?>
						<div class="sc_row">
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo __( 'Offer URL', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-course__offer_url">
									<a href="<?php echo esc_url($element['offers']['url']); ?>"><?php echo esc_url($element['offers']['url']); ?></a>
								</div>
							</div>
						</div>
					<?php endif; ?>
				</div>
				</div>
			<?php endif; ?>
		</section>
		<?php
	endif;
}

foreach ( $atts['elements'] as $element ) {
	?>
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "Course",
			"name": "<?php echo wpsc_esc_jsonld($element['title']); ?>",
			"description": "<?php echo wpsc_esc_jsonld( $element['description']); ?>"
			<?php if ( ! empty( $element['provider_name'] ) && ! empty( $element['provider_same_as'] ) ) : ?>
			,"provider": {
				"@type": "Organization",
				"name": "<?php echo wpsc_esc_jsonld($element['provider_name']); ?>",
				"sameAs": "<?php echo wpsc_esc_jsonld($element['provider_same_as']); ?>"
			}
			<?php endif; ?>
			<?php if ( ! empty( $element['course_instance'] ) ) : ?>
			,"hasCourseInstance": {
				"@type": "CourseInstance",
				"name": "<?php echo wpsc_esc_jsonld($element['course_instance']['name']); ?>"
				<?php if ( ! empty( $element['course_instance']['start_date'] ) ) : ?>
				,"startDate": "<?php echo wpsc_esc_jsonld($element['course_instance']['start_date']); ?>"
				<?php endif; ?>
				<?php if ( ! empty( $element['course_instance']['end_date'] ) ) : ?>
				,"endDate": "<?php echo wpsc_esc_jsonld($element['course_instance']['end_date']); ?>"
				<?php endif; ?>
				<?php if ( ! empty( $element['course_instance']['course_mode'] ) ) : ?>
				,"courseMode": "<?php echo wpsc_esc_jsonld($element['course_instance']['course_mode']); ?>"
				<?php endif; ?>
				<?php if ( ! empty( $element['course_instance']['course_url'] ) ) : ?>
				,"url": "<?php echo wpsc_esc_jsonld($element['course_instance']['course_url']); ?>"
				<?php endif; ?>
				<?php if ( ! empty( $element['course_instance']['course_schedule'] ) ) : ?>
				,"courseSchedule": {
					"@type": "Schedule"
					<?php if ( ! empty( $element['course_instance']['schedule_duration'] ) ) : ?>
					,"duration": "<?php echo wpsc_esc_jsonld($element['course_instance']['schedule_duration']); ?>"
					<?php endif; ?>
					<?php if ( ! empty( $element['course_instance']['repeat_frequency'] ) ) : ?>
					,"repeatFrequency": "<?php echo wpsc_esc_jsonld($element['course_instance']['repeat_frequency']); ?>"
					<?php endif; ?>
					<?php if ( ! empty( $element['course_instance']['repeat_count'] ) ) : ?>
					,"repeatCount": <?php echo intval($element['course_instance']['repeat_count']); ?>
					<?php endif; ?>
					<?php if ( ! empty( $element['course_instance']['start_date'] ) ) : ?>
					,"startDate": "<?php echo wpsc_esc_jsonld($element['course_instance']['start_date']); ?>"
					<?php endif; ?>
					<?php if ( ! empty( $element['course_instance']['end_date'] ) ) : ?>
					,"endDate": "<?php echo wpsc_esc_jsonld($element['course_instance']['end_date']); ?>"
					<?php endif; ?>
				}
				<?php endif; ?>

			}
			<?php endif; ?>
			<?php if ( ! empty( $element['offers'] ) ) : ?>
			,"offers": {
				"@type": "Offer",
				"price": "<?php echo wpsc_esc_jsonld($element['offers']['price']); ?>"
				<?php if ( ! empty( $element['offers']['price_currency'] ) ) : ?>
				,"priceCurrency": "<?php echo wpsc_esc_jsonld($element['offers']['price_currency']); ?>"
				<?php endif; ?>
				<?php if ( ! empty( $element['offers']['category'] ) ) : ?>
				,"category": "<?php echo wpsc_esc_jsonld($element['offers']['category']); ?>"
				<?php endif; ?>
				<?php if ( ! empty( $element['offers']['availability'] ) ) : ?>
				,"availability": "http://schema.org/<?php echo wpsc_esc_jsonld($element['offers']['availability']); ?>"
				<?php endif; ?>
				<?php if ( ! empty( $element['offers']['valid_from'] ) ) : ?>
				,"validFrom": "<?php echo wpsc_esc_jsonld($element['offers']['valid_from']); ?>"
				<?php endif; ?>
				<?php if ( ! empty( $element['offers']['url'] ) ) : ?>
				,"url": "<?php echo wpsc_esc_jsonld($element['offers']['url']); ?>"
				<?php endif; ?>
			}
			<?php endif; ?>
		}
	</script>
	<?php
}
