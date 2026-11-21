import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\BadgeController::index
 * @see app/Http/Controllers/Backend/BadgeController.php:13
 * @route '/admin-dashboard/badges'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/badges',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BadgeController::index
 * @see app/Http/Controllers/Backend/BadgeController.php:13
 * @route '/admin-dashboard/badges'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BadgeController::index
 * @see app/Http/Controllers/Backend/BadgeController.php:13
 * @route '/admin-dashboard/badges'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BadgeController::index
 * @see app/Http/Controllers/Backend/BadgeController.php:13
 * @route '/admin-dashboard/badges'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BadgeController::index
 * @see app/Http/Controllers/Backend/BadgeController.php:13
 * @route '/admin-dashboard/badges'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BadgeController::index
 * @see app/Http/Controllers/Backend/BadgeController.php:13
 * @route '/admin-dashboard/badges'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BadgeController::index
 * @see app/Http/Controllers/Backend/BadgeController.php:13
 * @route '/admin-dashboard/badges'
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
* @see \App\Http\Controllers\Backend\BadgeController::create
 * @see app/Http/Controllers/Backend/BadgeController.php:26
 * @route '/admin-dashboard/badges/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/badges/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BadgeController::create
 * @see app/Http/Controllers/Backend/BadgeController.php:26
 * @route '/admin-dashboard/badges/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BadgeController::create
 * @see app/Http/Controllers/Backend/BadgeController.php:26
 * @route '/admin-dashboard/badges/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BadgeController::create
 * @see app/Http/Controllers/Backend/BadgeController.php:26
 * @route '/admin-dashboard/badges/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BadgeController::create
 * @see app/Http/Controllers/Backend/BadgeController.php:26
 * @route '/admin-dashboard/badges/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BadgeController::create
 * @see app/Http/Controllers/Backend/BadgeController.php:26
 * @route '/admin-dashboard/badges/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BadgeController::create
 * @see app/Http/Controllers/Backend/BadgeController.php:26
 * @route '/admin-dashboard/badges/create'
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
* @see \App\Http\Controllers\Backend\BadgeController::store
 * @see app/Http/Controllers/Backend/BadgeController.php:35
 * @route '/admin-dashboard/badges'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin-dashboard/badges',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\BadgeController::store
 * @see app/Http/Controllers/Backend/BadgeController.php:35
 * @route '/admin-dashboard/badges'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BadgeController::store
 * @see app/Http/Controllers/Backend/BadgeController.php:35
 * @route '/admin-dashboard/badges'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\BadgeController::store
 * @see app/Http/Controllers/Backend/BadgeController.php:35
 * @route '/admin-dashboard/badges'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BadgeController::store
 * @see app/Http/Controllers/Backend/BadgeController.php:35
 * @route '/admin-dashboard/badges'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\BadgeController::show
 * @see app/Http/Controllers/Backend/BadgeController.php:0
 * @route '/admin-dashboard/badges/{badge}'
 */
export const show = (args: { badge: string | number } | [badge: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/badges/{badge}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BadgeController::show
 * @see app/Http/Controllers/Backend/BadgeController.php:0
 * @route '/admin-dashboard/badges/{badge}'
 */
show.url = (args: { badge: string | number } | [badge: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { badge: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    badge: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        badge: args.badge,
                }

    return show.definition.url
            .replace('{badge}', parsedArgs.badge.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BadgeController::show
 * @see app/Http/Controllers/Backend/BadgeController.php:0
 * @route '/admin-dashboard/badges/{badge}'
 */
show.get = (args: { badge: string | number } | [badge: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BadgeController::show
 * @see app/Http/Controllers/Backend/BadgeController.php:0
 * @route '/admin-dashboard/badges/{badge}'
 */
show.head = (args: { badge: string | number } | [badge: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BadgeController::show
 * @see app/Http/Controllers/Backend/BadgeController.php:0
 * @route '/admin-dashboard/badges/{badge}'
 */
    const showForm = (args: { badge: string | number } | [badge: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BadgeController::show
 * @see app/Http/Controllers/Backend/BadgeController.php:0
 * @route '/admin-dashboard/badges/{badge}'
 */
        showForm.get = (args: { badge: string | number } | [badge: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BadgeController::show
 * @see app/Http/Controllers/Backend/BadgeController.php:0
 * @route '/admin-dashboard/badges/{badge}'
 */
        showForm.head = (args: { badge: string | number } | [badge: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\BadgeController::edit
 * @see app/Http/Controllers/Backend/BadgeController.php:45
 * @route '/admin-dashboard/badges/{badge}/edit'
 */
export const edit = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/badges/{badge}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BadgeController::edit
 * @see app/Http/Controllers/Backend/BadgeController.php:45
 * @route '/admin-dashboard/badges/{badge}/edit'
 */
edit.url = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { badge: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { badge: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    badge: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        badge: typeof args.badge === 'object'
                ? args.badge.id
                : args.badge,
                }

    return edit.definition.url
            .replace('{badge}', parsedArgs.badge.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BadgeController::edit
 * @see app/Http/Controllers/Backend/BadgeController.php:45
 * @route '/admin-dashboard/badges/{badge}/edit'
 */
edit.get = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\BadgeController::edit
 * @see app/Http/Controllers/Backend/BadgeController.php:45
 * @route '/admin-dashboard/badges/{badge}/edit'
 */
edit.head = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\BadgeController::edit
 * @see app/Http/Controllers/Backend/BadgeController.php:45
 * @route '/admin-dashboard/badges/{badge}/edit'
 */
    const editForm = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\BadgeController::edit
 * @see app/Http/Controllers/Backend/BadgeController.php:45
 * @route '/admin-dashboard/badges/{badge}/edit'
 */
        editForm.get = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\BadgeController::edit
 * @see app/Http/Controllers/Backend/BadgeController.php:45
 * @route '/admin-dashboard/badges/{badge}/edit'
 */
        editForm.head = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\BadgeController::update
 * @see app/Http/Controllers/Backend/BadgeController.php:54
 * @route '/admin-dashboard/badges/{badge}'
 */
export const update = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin-dashboard/badges/{badge}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\BadgeController::update
 * @see app/Http/Controllers/Backend/BadgeController.php:54
 * @route '/admin-dashboard/badges/{badge}'
 */
update.url = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { badge: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { badge: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    badge: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        badge: typeof args.badge === 'object'
                ? args.badge.id
                : args.badge,
                }

    return update.definition.url
            .replace('{badge}', parsedArgs.badge.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BadgeController::update
 * @see app/Http/Controllers/Backend/BadgeController.php:54
 * @route '/admin-dashboard/badges/{badge}'
 */
update.put = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Backend\BadgeController::update
 * @see app/Http/Controllers/Backend/BadgeController.php:54
 * @route '/admin-dashboard/badges/{badge}'
 */
update.patch = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Backend\BadgeController::update
 * @see app/Http/Controllers/Backend/BadgeController.php:54
 * @route '/admin-dashboard/badges/{badge}'
 */
    const updateForm = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BadgeController::update
 * @see app/Http/Controllers/Backend/BadgeController.php:54
 * @route '/admin-dashboard/badges/{badge}'
 */
        updateForm.put = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Backend\BadgeController::update
 * @see app/Http/Controllers/Backend/BadgeController.php:54
 * @route '/admin-dashboard/badges/{badge}'
 */
        updateForm.patch = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\BadgeController::destroy
 * @see app/Http/Controllers/Backend/BadgeController.php:64
 * @route '/admin-dashboard/badges/{badge}'
 */
export const destroy = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/badges/{badge}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\BadgeController::destroy
 * @see app/Http/Controllers/Backend/BadgeController.php:64
 * @route '/admin-dashboard/badges/{badge}'
 */
destroy.url = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { badge: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { badge: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    badge: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        badge: typeof args.badge === 'object'
                ? args.badge.id
                : args.badge,
                }

    return destroy.definition.url
            .replace('{badge}', parsedArgs.badge.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BadgeController::destroy
 * @see app/Http/Controllers/Backend/BadgeController.php:64
 * @route '/admin-dashboard/badges/{badge}'
 */
destroy.delete = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\BadgeController::destroy
 * @see app/Http/Controllers/Backend/BadgeController.php:64
 * @route '/admin-dashboard/badges/{badge}'
 */
    const destroyForm = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BadgeController::destroy
 * @see app/Http/Controllers/Backend/BadgeController.php:64
 * @route '/admin-dashboard/badges/{badge}'
 */
        destroyForm.delete = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\BadgeController::toggleStatus
 * @see app/Http/Controllers/Backend/BadgeController.php:70
 * @route '/admin-dashboard/badges/{badge}/toggle-status'
 */
export const toggleStatus = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin-dashboard/badges/{badge}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\BadgeController::toggleStatus
 * @see app/Http/Controllers/Backend/BadgeController.php:70
 * @route '/admin-dashboard/badges/{badge}/toggle-status'
 */
toggleStatus.url = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { badge: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { badge: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    badge: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        badge: typeof args.badge === 'object'
                ? args.badge.id
                : args.badge,
                }

    return toggleStatus.definition.url
            .replace('{badge}', parsedArgs.badge.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BadgeController::toggleStatus
 * @see app/Http/Controllers/Backend/BadgeController.php:70
 * @route '/admin-dashboard/badges/{badge}/toggle-status'
 */
toggleStatus.post = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\BadgeController::toggleStatus
 * @see app/Http/Controllers/Backend/BadgeController.php:70
 * @route '/admin-dashboard/badges/{badge}/toggle-status'
 */
    const toggleStatusForm = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\BadgeController::toggleStatus
 * @see app/Http/Controllers/Backend/BadgeController.php:70
 * @route '/admin-dashboard/badges/{badge}/toggle-status'
 */
        toggleStatusForm.post = (args: { badge: number | { id: number } } | [badge: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const BadgeController = { index, create, store, show, edit, update, destroy, toggleStatus }

export default BadgeController