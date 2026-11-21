import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\BlogController::index
 * @see app/Http/Controllers/Frontend/BlogController.php:12
 * @route '/api/blogs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\BlogController::index
 * @see app/Http/Controllers/Frontend/BlogController.php:12
 * @route '/api/blogs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\BlogController::index
 * @see app/Http/Controllers/Frontend/BlogController.php:12
 * @route '/api/blogs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\BlogController::index
 * @see app/Http/Controllers/Frontend/BlogController.php:12
 * @route '/api/blogs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\BlogController::index
 * @see app/Http/Controllers/Frontend/BlogController.php:12
 * @route '/api/blogs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\BlogController::index
 * @see app/Http/Controllers/Frontend/BlogController.php:12
 * @route '/api/blogs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\BlogController::index
 * @see app/Http/Controllers/Frontend/BlogController.php:12
 * @route '/api/blogs'
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
* @see \App\Http\Controllers\Frontend\BlogController::show
 * @see app/Http/Controllers/Frontend/BlogController.php:28
 * @route '/api/blogs/{alias}'
 */
export const show = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/blogs/{alias}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\BlogController::show
 * @see app/Http/Controllers/Frontend/BlogController.php:28
 * @route '/api/blogs/{alias}'
 */
show.url = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { alias: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    alias: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        alias: args.alias,
                }

    return show.definition.url
            .replace('{alias}', parsedArgs.alias.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\BlogController::show
 * @see app/Http/Controllers/Frontend/BlogController.php:28
 * @route '/api/blogs/{alias}'
 */
show.get = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\BlogController::show
 * @see app/Http/Controllers/Frontend/BlogController.php:28
 * @route '/api/blogs/{alias}'
 */
show.head = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\BlogController::show
 * @see app/Http/Controllers/Frontend/BlogController.php:28
 * @route '/api/blogs/{alias}'
 */
    const showForm = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\BlogController::show
 * @see app/Http/Controllers/Frontend/BlogController.php:28
 * @route '/api/blogs/{alias}'
 */
        showForm.get = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\BlogController::show
 * @see app/Http/Controllers/Frontend/BlogController.php:28
 * @route '/api/blogs/{alias}'
 */
        showForm.head = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const BlogController = { index, show }

export default BlogController