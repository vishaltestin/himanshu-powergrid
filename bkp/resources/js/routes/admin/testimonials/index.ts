import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\TestimonialController::index
 * @see app/Http/Controllers/Backend/TestimonialController.php:12
 * @route '/admin-dashboard/testimonials'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/testimonials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::index
 * @see app/Http/Controllers/Backend/TestimonialController.php:12
 * @route '/admin-dashboard/testimonials'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::index
 * @see app/Http/Controllers/Backend/TestimonialController.php:12
 * @route '/admin-dashboard/testimonials'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\TestimonialController::index
 * @see app/Http/Controllers/Backend/TestimonialController.php:12
 * @route '/admin-dashboard/testimonials'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::index
 * @see app/Http/Controllers/Backend/TestimonialController.php:12
 * @route '/admin-dashboard/testimonials'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::index
 * @see app/Http/Controllers/Backend/TestimonialController.php:12
 * @route '/admin-dashboard/testimonials'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\TestimonialController::index
 * @see app/Http/Controllers/Backend/TestimonialController.php:12
 * @route '/admin-dashboard/testimonials'
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
* @see \App\Http\Controllers\Backend\TestimonialController::create
 * @see app/Http/Controllers/Backend/TestimonialController.php:25
 * @route '/admin-dashboard/testimonials/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/testimonials/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::create
 * @see app/Http/Controllers/Backend/TestimonialController.php:25
 * @route '/admin-dashboard/testimonials/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::create
 * @see app/Http/Controllers/Backend/TestimonialController.php:25
 * @route '/admin-dashboard/testimonials/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\TestimonialController::create
 * @see app/Http/Controllers/Backend/TestimonialController.php:25
 * @route '/admin-dashboard/testimonials/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::create
 * @see app/Http/Controllers/Backend/TestimonialController.php:25
 * @route '/admin-dashboard/testimonials/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::create
 * @see app/Http/Controllers/Backend/TestimonialController.php:25
 * @route '/admin-dashboard/testimonials/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\TestimonialController::create
 * @see app/Http/Controllers/Backend/TestimonialController.php:25
 * @route '/admin-dashboard/testimonials/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Backend\TestimonialController::store
 * @see app/Http/Controllers/Backend/TestimonialController.php:30
 * @route '/admin-dashboard/testimonials'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin-dashboard/testimonials',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::store
 * @see app/Http/Controllers/Backend/TestimonialController.php:30
 * @route '/admin-dashboard/testimonials'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::store
 * @see app/Http/Controllers/Backend/TestimonialController.php:30
 * @route '/admin-dashboard/testimonials'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::store
 * @see app/Http/Controllers/Backend/TestimonialController.php:30
 * @route '/admin-dashboard/testimonials'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::store
 * @see app/Http/Controllers/Backend/TestimonialController.php:30
 * @route '/admin-dashboard/testimonials'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\TestimonialController::show
 * @see app/Http/Controllers/Backend/TestimonialController.php:0
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
export const show = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/testimonials/{testimonial}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::show
 * @see app/Http/Controllers/Backend/TestimonialController.php:0
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
show.url = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: args.testimonial,
                }

    return show.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::show
 * @see app/Http/Controllers/Backend/TestimonialController.php:0
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
show.get = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\TestimonialController::show
 * @see app/Http/Controllers/Backend/TestimonialController.php:0
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
show.head = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::show
 * @see app/Http/Controllers/Backend/TestimonialController.php:0
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
    const showForm = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::show
 * @see app/Http/Controllers/Backend/TestimonialController.php:0
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
        showForm.get = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\TestimonialController::show
 * @see app/Http/Controllers/Backend/TestimonialController.php:0
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
        showForm.head = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\TestimonialController::edit
 * @see app/Http/Controllers/Backend/TestimonialController.php:41
 * @route '/admin-dashboard/testimonials/{testimonial}/edit'
 */
export const edit = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/testimonials/{testimonial}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::edit
 * @see app/Http/Controllers/Backend/TestimonialController.php:41
 * @route '/admin-dashboard/testimonials/{testimonial}/edit'
 */
edit.url = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { testimonial: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: typeof args.testimonial === 'object'
                ? args.testimonial.id
                : args.testimonial,
                }

    return edit.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::edit
 * @see app/Http/Controllers/Backend/TestimonialController.php:41
 * @route '/admin-dashboard/testimonials/{testimonial}/edit'
 */
edit.get = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\TestimonialController::edit
 * @see app/Http/Controllers/Backend/TestimonialController.php:41
 * @route '/admin-dashboard/testimonials/{testimonial}/edit'
 */
edit.head = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::edit
 * @see app/Http/Controllers/Backend/TestimonialController.php:41
 * @route '/admin-dashboard/testimonials/{testimonial}/edit'
 */
    const editForm = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::edit
 * @see app/Http/Controllers/Backend/TestimonialController.php:41
 * @route '/admin-dashboard/testimonials/{testimonial}/edit'
 */
        editForm.get = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\TestimonialController::edit
 * @see app/Http/Controllers/Backend/TestimonialController.php:41
 * @route '/admin-dashboard/testimonials/{testimonial}/edit'
 */
        editForm.head = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Backend\TestimonialController::update
 * @see app/Http/Controllers/Backend/TestimonialController.php:46
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
export const update = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin-dashboard/testimonials/{testimonial}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::update
 * @see app/Http/Controllers/Backend/TestimonialController.php:46
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
update.url = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { testimonial: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: typeof args.testimonial === 'object'
                ? args.testimonial.id
                : args.testimonial,
                }

    return update.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::update
 * @see app/Http/Controllers/Backend/TestimonialController.php:46
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
update.put = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Backend\TestimonialController::update
 * @see app/Http/Controllers/Backend/TestimonialController.php:46
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
update.patch = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::update
 * @see app/Http/Controllers/Backend/TestimonialController.php:46
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
    const updateForm = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::update
 * @see app/Http/Controllers/Backend/TestimonialController.php:46
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
        updateForm.put = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Backend\TestimonialController::update
 * @see app/Http/Controllers/Backend/TestimonialController.php:46
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
        updateForm.patch = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\TestimonialController::destroy
 * @see app/Http/Controllers/Backend/TestimonialController.php:57
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
export const destroy = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/testimonials/{testimonial}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::destroy
 * @see app/Http/Controllers/Backend/TestimonialController.php:57
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
destroy.url = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { testimonial: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: typeof args.testimonial === 'object'
                ? args.testimonial.id
                : args.testimonial,
                }

    return destroy.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::destroy
 * @see app/Http/Controllers/Backend/TestimonialController.php:57
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
destroy.delete = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::destroy
 * @see app/Http/Controllers/Backend/TestimonialController.php:57
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
    const destroyForm = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::destroy
 * @see app/Http/Controllers/Backend/TestimonialController.php:57
 * @route '/admin-dashboard/testimonials/{testimonial}'
 */
        destroyForm.delete = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleStatus
 * @see app/Http/Controllers/Backend/TestimonialController.php:63
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-status'
 */
export const toggleStatus = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin-dashboard/testimonials/{testimonial}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleStatus
 * @see app/Http/Controllers/Backend/TestimonialController.php:63
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-status'
 */
toggleStatus.url = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { testimonial: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: typeof args.testimonial === 'object'
                ? args.testimonial.id
                : args.testimonial,
                }

    return toggleStatus.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleStatus
 * @see app/Http/Controllers/Backend/TestimonialController.php:63
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-status'
 */
toggleStatus.post = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleStatus
 * @see app/Http/Controllers/Backend/TestimonialController.php:63
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-status'
 */
    const toggleStatusForm = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleStatus
 * @see app/Http/Controllers/Backend/TestimonialController.php:63
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-status'
 */
        toggleStatusForm.post = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
/**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleHome
 * @see app/Http/Controllers/Backend/TestimonialController.php:69
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-home'
 */
export const toggleHome = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleHome.url(args, options),
    method: 'post',
})

toggleHome.definition = {
    methods: ["post"],
    url: '/admin-dashboard/testimonials/{testimonial}/toggle-home',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleHome
 * @see app/Http/Controllers/Backend/TestimonialController.php:69
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-home'
 */
toggleHome.url = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { testimonial: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: typeof args.testimonial === 'object'
                ? args.testimonial.id
                : args.testimonial,
                }

    return toggleHome.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleHome
 * @see app/Http/Controllers/Backend/TestimonialController.php:69
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-home'
 */
toggleHome.post = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleHome.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleHome
 * @see app/Http/Controllers/Backend/TestimonialController.php:69
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-home'
 */
    const toggleHomeForm = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleHome.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\TestimonialController::toggleHome
 * @see app/Http/Controllers/Backend/TestimonialController.php:69
 * @route '/admin-dashboard/testimonials/{testimonial}/toggle-home'
 */
        toggleHomeForm.post = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleHome.url(args, options),
            method: 'post',
        })
    
    toggleHome.form = toggleHomeForm
const testimonials = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
toggleStatus: Object.assign(toggleStatus, toggleStatus),
toggleHome: Object.assign(toggleHome, toggleHome),
}

export default testimonials