<?php

namespace WPGraphQL\Model;

use GraphQLRelay\Relay;

/**
 * Class UserRole - Models data for user roles
 *
 * @property string $displayName
 * @property string $id
 * @property string $name
 * @property array  $capabilities
 *
 * @package WPGraphQL\Model
 */
class UserRole extends Model {

	/**
	 * Stores the incoming user role to be modeled
	 *
	 * @var array<string,mixed> $data
	 */
	protected $data;

	/**
	 * UserRole constructor.
	 *
	 * @param array<string,mixed> $user_role The incoming user role to be modeled
	 *
	 * @return void
	 * @throws \Exception
	 */
	public function __construct( $user_role ) {
		$this->data = $user_role;
		parent::__construct();
	}

	/**
	 * {@inheritDoc}
	 */
	protected function is_private() {
		if ( current_user_can( 'list_users' ) ) {
			return false;
		}

		$current_user_roles = wp_get_current_user()->roles;

		if ( in_array( $this->data['slug'], $current_user_roles, true ) ) {
			return false;
		}

		return true;
	}

	/**
	 * {@inheritDoc}
	 */
	protected function init() {
		if ( empty( $this->fields ) ) {
			$this->fields = [
				'id'           => function () {
					return Relay::toGlobalId( 'user_role', $this->data['id'] );
				},
				'name'         => function () {
					return ! empty( $this->data['name'] ) ? esc_html( $this->data['name'] ) : null;
				},
				'displayName'  => function () {
					return ! empty( $this->data['displayName'] ) ? esc_html( $this->data['displayName'] ) : null;
				},
				'capabilities' => function () {
					if ( empty( $this->data['capabilities'] ) || ! is_array( $this->data['capabilities'] ) ) {
						return null;
					} else {
						return array_keys( $this->data['capabilities'] );
					}
				},
			];
		}
	}
}
