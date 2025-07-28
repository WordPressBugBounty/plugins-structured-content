<?php
if ( ! isset( $atts['html'] ) || $atts['html'] === true || $atts['html'] === 'true' ) :

	$title_ID = isset( $atts['custom_title_id'] ) && $atts['custom_title_id'] !== '' ? sanitize_title( $atts['custom_title_id'] ) : sanitize_title( $atts['profile_name'] );

	$title = '<span' . ( $atts['generate_title_id'] ? ' id="' . esc_attr($title_ID) . '"' : '' ) . '>' . esc_html( $atts['profile_name'] ) . '</span>';

	?>

	<section class="sc_fs_profile-page sc_card <?php echo esc_attr($atts['css_class']); ?> <?php echo esc_attr($atts['className']); ?>">
		<div class="sc_row">
			<div class="sc_grey-box">
				<div class="sc_box-label">
					<?php echo esc_html__( 'Personal', 'structured-content' ); ?>
				</div>
				<div class="sc_company">
					<div class="sc_profile-infos">
						<div class="sc_input-group">
							<div class="sc_input-label">
								<?php echo esc_html__( 'Name', 'structured-content' ); ?>
							</div>
							<div class="wp-block-structured-content-profile-page__profileName">
								<?php echo wp_kses_post($title); ?>
							</div>
						</div>
						<?php if ( ! empty( $atts['alternate_name'] ) ) { ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo esc_html__( 'Alternate Name', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-profile-page__profileName">
									<?php echo esc_html($atts['alternate_name']); ?>
								</div>
							</div>
						<?php } ?>
						<?php if ( ! empty( $atts['job_title'] ) ) { ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo esc_html__( 'Job Title', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-profile-page__jobTitle">
									<?php echo esc_html($atts['job_title']); ?>
								</div>
							</div>
						<?php } ?>
						<?php if ( ! empty( $atts['birthdate'] ) ) { ?>
							<div class="sc_input-group">
								<div class="sc_input-label">
									<?php echo esc_html__( 'Birthdate', 'structured-content' ); ?>
								</div>
								<div class="wp-block-structured-content-profile-page__birthdate">
									<?php echo date_i18n( get_option( 'date_format' ), strtotime( $atts['birthdate'] ) ); ?>
								</div>
							</div>
						<?php } ?>
					</div>
					<?php if ( ! empty( $atts['image_id'] ) ) { ?>
						<div class="wp-block-structured-content-profile-page__profileImage">
							<figure class="sc_company-logo-wrapper sc_person-image-wrapper">
								<a href="<?php echo esc_url($atts['image_url']); ?>"
									title="<?php echo esc_attr($atts['imageAlt']); ?>">
									<img src="<?php echo esc_url($atts['image_url']); ?>"
											alt="<?php echo esc_attr($atts['imageAlt']); ?>">
								</a>
							</figure>
						</div>
					<?php } ?>
				</div>
			</div><div class="sc_grey-box">
				<div class="sc_box-label">
					<?php echo esc_html__( 'Contact', 'structured-content' ); ?>
				</div>
				<div class="sc_input-group">
					<div class="sc_input-label">
						<?php echo esc_html__( 'E-Mail', 'structured-content' ); ?>
					</div>
					<div class="wp-block-structured-content-profile-page__email">
						<a href="mailto:<?php echo esc_attr($atts['email']); ?>"><?php echo esc_html($atts['email']); ?></a>
					</div>
				</div>
				<div class="sc_input-group">
					<div class="sc_input-label">
						<?php echo esc_html__( 'URL', 'structured-content' ); ?>
					</div>
					<div class="wp-block-structured-content-profile-page__url">
						<a href="<?php echo esc_url($atts['homepage']); ?>"><?php echo esc_html($atts['homepage']); ?></a>
					</div>
				</div>
				<div class="sc_input-group">
					<div class="sc_input-label">
						<?php echo esc_html__( 'Telephone', 'structured-content' ); ?>
					</div>
					<div class="wp-block-structured-content-profile-page__telephone">
						<a href="tel:<?php echo esc_attr($atts['telephone']); ?>"><?php echo esc_html($atts['telephone']); ?></a>
					</div>
				</div>
			</div>
		</div>
		<?php if ( isset( $atts['works_for_name'] ) ) : ?>
		<div class="sc_row">
		<?php endif; ?>
			<div class="sc_grey-box <?php echo ! isset( $atts['works_for_name'] ) ? 'sc_margin-top-15' : ''; ?>">
				<div class="sc_box-label">
					<?php echo esc_html__( 'Address', 'structured-content' ); ?>
				</div>
				<div class="sc_input-group">
					<div class="sc_input-label">
						<?php echo esc_html__( 'Street', 'structured-content' ); ?>
					</div>
					<div class="wp-block-structured-content-profile-page__streetAddress">
						<?php echo esc_html($atts['street_address']); ?>
					</div>
				</div>
				<div class="sc_row">
					<div class="sc_input-group">
						<div class="sc_input-label">
							<?php echo esc_html__( 'Postal Code', 'structured-content' ); ?>
						</div>
						<div class="wp-block-structured-content-profile-page__postalCode">
							<?php echo esc_html($atts['postal_code']); ?>
						</div>
					</div>
					<div class="sc_input-group">
						<div class="sc_input-label">
							<?php echo esc_html__( 'Locality', 'structured-content' ); ?>
						</div>
						<div class="wp-block-structured-content-profile-page__addressLocality">
							<?php echo esc_html($atts['address_locality']); ?>
						</div>
					</div>
				</div>
				<div class="sc_row">
					<div class="sc_input-group">
						<div class="sc_input-label">
							<?php echo esc_html__( 'Country ISO Code', 'structured-content' ); ?>
						</div>
						<div class="wp-block-structured-content-profile-page__addressCountry">
							<?php echo esc_html($atts['address_country']); ?>
						</div>
					</div>
					<div class="sc_input-group">
						<div class="sc_input-label">
							<?php echo esc_html__( 'Region ISO Code', 'structured-content' ); ?>
						</div>
						<div class="wp-block-structured-content-profile-page__addressRegion">
							<?php echo esc_html($atts['address_region']); ?>
						</div>
					</div>
				</div>
			</div>
		
			<?php
			if ( isset( $atts['works_for_name'] ) ) {
				?>
				<div class="sc_grey-box">
					<div class="sc_box-label">
						<?php echo esc_html__( 'Work', 'structured-content' ); ?>
					</div>
					<?php if ( ! empty( $atts['works_for_logo'] ) ) { ?>
						<div class="sc_inner_grid">
							<div class="sc_work-infos">
					<?php } ?>
					<div class="sc_input-group">
						<div class="sc_input-label">
							<?php echo esc_html__( 'Organisation Name', 'structured-content' ); ?>
						</div>
						<div class="wp-block-structured-content-profile-page__workName">
							<?php echo esc_html($atts['works_for_name']); ?>
						</div>
					</div>
					<?php
					if ( isset( $atts['works_for_alt'] ) ) {
						?>
						<div class="sc_input-group">
							<div class="sc_input-label">
								<?php echo esc_html__( 'Alternate Name', 'structured-content' ); ?>
							</div>
							<div class="wp-block-structured-content-profile-page__workAlt">
								<?php echo esc_html($atts['works_for_alt']); ?>
							</div>
						</div>
						<?php
					}
					?>
					<?php if ( ! empty( $atts['works_for_url'] ) ) { ?>
						<div class="sc_input-group">
							<div class="sc_input-label">
								<?php echo esc_html__( 'Company URL', 'structured-content' ); ?>
							</div>
							<div class="wp-block-structured-content-profile-page__workURL">
								<a href="<?php echo esc_url($atts['works_for_url']); ?>" target="_blank" rel="noopener noreferrer">
									<?php echo esc_html($atts['works_for_url']); ?>
								</a>
							</div>
						</div>
					<?php } ?>
					<?php if ( ! empty( $atts['works_for_logo'] ) ) { ?>
							</div>
							<div class="sc_work-logo">
								<div class="sc_input-group">
									<div class="sc_input-label">
										<?php echo esc_html__( 'Logo', 'structured-content' ); ?>
									</div>
									<div class="wp-block-structured-content-profile-page__workLogo">
										<figure class="sc_company-logo-wrapper sc_person-image-wrapper">
											<a href="<?php echo esc_url($atts['works_for_logo']); ?>"
											   title="<?php echo esc_attr($atts['works_for_name']); ?>">
												<img src="<?php echo esc_url($atts['works_for_logo']); ?>"
													 alt="<?php echo esc_attr($atts['works_for_name']); ?>">
											</a>
										</figure>
									</div>
								</div>
							</div>
						</div>
					<?php } ?>
				</div>
				<?php
			}
			?>
		
		<?php if ( isset( $atts['works_for_name'] ) ) : ?>
		</div>
		<?php endif; ?>
	</section>
<?php endif; ?>
<script type="application/ld+json">
<?php
$json_ld = array(
	'@context' => 'http://schema.org',
	'@type' => 'ProfilePage',
	'url' => get_permalink(),
	'mainEntity' => array(
		'@type' => 'Person',
		'name' => $atts['profile_name']
	)
);

if (!empty($atts['alternate_name'])) {
	$json_ld['mainEntity']['alternateName'] = $atts['alternate_name'];
}

if (!empty($atts['job_title'])) {
	$json_ld['mainEntity']['jobTitle'] = $atts['job_title'];
}

if (!empty($atts['birthdate'])) {
	$json_ld['mainEntity']['birthDate'] = $atts['birthdate'];
}

if (!empty($atts['email'])) {
	$json_ld['mainEntity']['email'] = $atts['email'];
}

if (!empty($atts['homepage'])) {
	$json_ld['mainEntity']['url'] = $atts['homepage'];
}

if (!empty($atts['telephone'])) {
	$json_ld['mainEntity']['telephone'] = $atts['telephone'];
}

if (!empty($atts['image_id'])) {
	$image_url = wp_get_attachment_url($atts['image_id']);
	if ($image_url) {
		$json_ld['mainEntity']['image'] = $image_url;
	}
}

if (!empty($atts['same_as'])) {
	if (is_array($atts['same_as'])) {
		$json_ld['mainEntity']['sameAs'] = array_map('esc_url', $atts['same_as']);
	} else {
		$same_as_urls = explode(',', $atts['same_as']);
		$same_as_urls = array_map('trim', $same_as_urls);
		$json_ld['mainEntity']['sameAs'] = array_map('esc_url', $same_as_urls);
	}
}

$address_fields = array(
	'street_address' => 'streetAddress',
	'address_locality' => 'addressLocality',
	'address_region' => 'addressRegion',
	'postal_code' => 'postalCode',
	'address_country' => 'addressCountry'
);

$has_address = false;
$address = array('@type' => 'PostalAddress');

foreach ($address_fields as $field => $json_key) {
	if (!empty($atts[$field])) {
		$address[$json_key] = $atts[$field];
		$has_address = true;
	}
}

if ($has_address) {
	$json_ld['mainEntity']['address'] = $address;
}

if (!empty($atts['works_for_name'])) {
	$works_for = array(
		'@type' => 'Organization',
		'name' => $atts['works_for_name']
	);

	if (!empty($atts['works_for_alt'])) {
		$works_for['alternateName'] = $atts['works_for_alt'];
	}

	if (!empty($atts['works_for_url'])) {
		$works_for['url'] = $atts['works_for_url'];
	}

	if (!empty($atts['works_for_logo'])) {
		$works_for['logo'] = $atts['works_for_logo'];
	}

	$json_ld['mainEntity']['worksFor'] = $works_for;
}

echo wp_json_encode($json_ld, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
?>
</script> 