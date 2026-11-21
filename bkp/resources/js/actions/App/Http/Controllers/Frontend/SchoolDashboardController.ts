import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::index
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/school-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::index
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::index
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::index
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::index
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::index
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::index
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:15
 * @route '/school-dashboard'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::showActivity
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:119
 * @route '/activity/{slug}'
 */
export const showActivity = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showActivity.url(args, options),
    method: 'get',
})

showActivity.definition = {
    methods: ["get","head"],
    url: '/activity/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::showActivity
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:119
 * @route '/activity/{slug}'
 */
showActivity.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return showActivity.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::showActivity
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:119
 * @route '/activity/{slug}'
 */
showActivity.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showActivity.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::showActivity
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:119
 * @route '/activity/{slug}'
 */
showActivity.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showActivity.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::showActivity
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:119
 * @route '/activity/{slug}'
 */
    const showActivityForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showActivity.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::showActivity
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:119
 * @route '/activity/{slug}'
 */
        showActivityForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showActivity.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\SchoolDashboardController::showActivity
 * @see app/Http/Controllers/Frontend/SchoolDashboardController.php:119
 * @route '/activity/{slug}'
 */
        showActivityForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showActivity.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showActivity.form = showActivityForm
const SchoolDashboardController = { index, showActivity }

export default SchoolDashboardController