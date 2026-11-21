import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\EnquiryController::index
 * @see app/Http/Controllers/Backend/EnquiryController.php:11
 * @route '/admin-dashboard/enquiries'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/enquiries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\EnquiryController::index
 * @see app/Http/Controllers/Backend/EnquiryController.php:11
 * @route '/admin-dashboard/enquiries'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EnquiryController::index
 * @see app/Http/Controllers/Backend/EnquiryController.php:11
 * @route '/admin-dashboard/enquiries'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\EnquiryController::index
 * @see app/Http/Controllers/Backend/EnquiryController.php:11
 * @route '/admin-dashboard/enquiries'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\EnquiryController::index
 * @see app/Http/Controllers/Backend/EnquiryController.php:11
 * @route '/admin-dashboard/enquiries'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\EnquiryController::index
 * @see app/Http/Controllers/Backend/EnquiryController.php:11
 * @route '/admin-dashboard/enquiries'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\EnquiryController::index
 * @see app/Http/Controllers/Backend/EnquiryController.php:11
 * @route '/admin-dashboard/enquiries'
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
* @see \App\Http\Controllers\Backend\EnquiryController::show
 * @see app/Http/Controllers/Backend/EnquiryController.php:25
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
export const show = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/enquiries/{enquiry}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\EnquiryController::show
 * @see app/Http/Controllers/Backend/EnquiryController.php:25
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
show.url = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enquiry: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { enquiry: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    enquiry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        enquiry: typeof args.enquiry === 'object'
                ? args.enquiry.id
                : args.enquiry,
                }

    return show.definition.url
            .replace('{enquiry}', parsedArgs.enquiry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EnquiryController::show
 * @see app/Http/Controllers/Backend/EnquiryController.php:25
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
show.get = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\EnquiryController::show
 * @see app/Http/Controllers/Backend/EnquiryController.php:25
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
show.head = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\EnquiryController::show
 * @see app/Http/Controllers/Backend/EnquiryController.php:25
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
    const showForm = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\EnquiryController::show
 * @see app/Http/Controllers/Backend/EnquiryController.php:25
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
        showForm.get = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\EnquiryController::show
 * @see app/Http/Controllers/Backend/EnquiryController.php:25
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
        showForm.head = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Backend\EnquiryController::destroy
 * @see app/Http/Controllers/Backend/EnquiryController.php:35
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
export const destroy = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/enquiries/{enquiry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\EnquiryController::destroy
 * @see app/Http/Controllers/Backend/EnquiryController.php:35
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
destroy.url = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enquiry: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { enquiry: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    enquiry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        enquiry: typeof args.enquiry === 'object'
                ? args.enquiry.id
                : args.enquiry,
                }

    return destroy.definition.url
            .replace('{enquiry}', parsedArgs.enquiry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\EnquiryController::destroy
 * @see app/Http/Controllers/Backend/EnquiryController.php:35
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
destroy.delete = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\EnquiryController::destroy
 * @see app/Http/Controllers/Backend/EnquiryController.php:35
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
    const destroyForm = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\EnquiryController::destroy
 * @see app/Http/Controllers/Backend/EnquiryController.php:35
 * @route '/admin-dashboard/enquiries/{enquiry}'
 */
        destroyForm.delete = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const enquiries = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
destroy: Object.assign(destroy, destroy),
}

export default enquiries