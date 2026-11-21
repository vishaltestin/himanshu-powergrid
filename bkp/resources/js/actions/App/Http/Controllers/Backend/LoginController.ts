import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\LoginController::store
 * @see app/Http/Controllers/Backend/LoginController.php:16
 * @route '/admin-dashboard/login'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin-dashboard/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\LoginController::store
 * @see app/Http/Controllers/Backend/LoginController.php:16
 * @route '/admin-dashboard/login'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LoginController::store
 * @see app/Http/Controllers/Backend/LoginController.php:16
 * @route '/admin-dashboard/login'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\LoginController::store
 * @see app/Http/Controllers/Backend/LoginController.php:16
 * @route '/admin-dashboard/login'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\LoginController::store
 * @see app/Http/Controllers/Backend/LoginController.php:16
 * @route '/admin-dashboard/login'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\LoginController::destroy
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(options),
    method: 'post',
})

destroy.definition = {
    methods: ["post"],
    url: '/admin-dashboard/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\LoginController::destroy
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LoginController::destroy
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
destroy.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\LoginController::destroy
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
    const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\LoginController::destroy
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
        destroyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(options),
            method: 'post',
        })
    
    destroy.form = destroyForm
const LoginController = { store, destroy }

export default LoginController