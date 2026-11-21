import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::index
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:16
 * @route '/admin-dashboard/activity-categories'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activity-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::index
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:16
 * @route '/admin-dashboard/activity-categories'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::index
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:16
 * @route '/admin-dashboard/activity-categories'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::index
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:16
 * @route '/admin-dashboard/activity-categories'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::index
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:16
 * @route '/admin-dashboard/activity-categories'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::index
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:16
 * @route '/admin-dashboard/activity-categories'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::index
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:16
 * @route '/admin-dashboard/activity-categories'
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
* @see \App\Http\Controllers\Backend\ActivityCategoryController::create
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:32
 * @route '/admin-dashboard/activity-categories/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activity-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::create
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:32
 * @route '/admin-dashboard/activity-categories/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::create
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:32
 * @route '/admin-dashboard/activity-categories/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::create
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:32
 * @route '/admin-dashboard/activity-categories/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::create
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:32
 * @route '/admin-dashboard/activity-categories/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::create
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:32
 * @route '/admin-dashboard/activity-categories/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::create
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:32
 * @route '/admin-dashboard/activity-categories/create'
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
* @see \App\Http\Controllers\Backend\ActivityCategoryController::store
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:37
 * @route '/admin-dashboard/activity-categories'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin-dashboard/activity-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::store
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:37
 * @route '/admin-dashboard/activity-categories'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::store
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:37
 * @route '/admin-dashboard/activity-categories'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::store
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:37
 * @route '/admin-dashboard/activity-categories'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::store
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:37
 * @route '/admin-dashboard/activity-categories'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::edit
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:55
 * @route '/admin-dashboard/activity-categories/{activity_category}/edit'
 */
export const edit = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/activity-categories/{activity_category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::edit
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:55
 * @route '/admin-dashboard/activity-categories/{activity_category}/edit'
 */
edit.url = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity_category: typeof args.activity_category === 'object'
                ? args.activity_category.id
                : args.activity_category,
                }

    return edit.definition.url
            .replace('{activity_category}', parsedArgs.activity_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::edit
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:55
 * @route '/admin-dashboard/activity-categories/{activity_category}/edit'
 */
edit.get = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::edit
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:55
 * @route '/admin-dashboard/activity-categories/{activity_category}/edit'
 */
edit.head = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::edit
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:55
 * @route '/admin-dashboard/activity-categories/{activity_category}/edit'
 */
    const editForm = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::edit
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:55
 * @route '/admin-dashboard/activity-categories/{activity_category}/edit'
 */
        editForm.get = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::edit
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:55
 * @route '/admin-dashboard/activity-categories/{activity_category}/edit'
 */
        editForm.head = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\ActivityCategoryController::update
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:60
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
export const update = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin-dashboard/activity-categories/{activity_category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::update
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:60
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
update.url = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity_category: typeof args.activity_category === 'object'
                ? args.activity_category.id
                : args.activity_category,
                }

    return update.definition.url
            .replace('{activity_category}', parsedArgs.activity_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::update
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:60
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
update.put = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::update
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:60
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
update.patch = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::update
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:60
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
    const updateForm = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::update
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:60
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
        updateForm.put = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::update
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:60
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
        updateForm.patch = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\ActivityCategoryController::destroy
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:86
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
export const destroy = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/activity-categories/{activity_category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::destroy
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:86
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
destroy.url = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity_category: typeof args.activity_category === 'object'
                ? args.activity_category.id
                : args.activity_category,
                }

    return destroy.definition.url
            .replace('{activity_category}', parsedArgs.activity_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::destroy
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:86
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
destroy.delete = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::destroy
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:86
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
    const destroyForm = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::destroy
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:86
 * @route '/admin-dashboard/activity-categories/{activity_category}'
 */
        destroyForm.delete = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\ActivityCategoryController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:102
 * @route '/admin-dashboard/activity-categories/{activity_category}/toggle-status'
 */
export const toggleStatus = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/admin-dashboard/activity-categories/{activity_category}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:102
 * @route '/admin-dashboard/activity-categories/{activity_category}/toggle-status'
 */
toggleStatus.url = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { activity_category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { activity_category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    activity_category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        activity_category: typeof args.activity_category === 'object'
                ? args.activity_category.id
                : args.activity_category,
                }

    return toggleStatus.definition.url
            .replace('{activity_category}', parsedArgs.activity_category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:102
 * @route '/admin-dashboard/activity-categories/{activity_category}/toggle-status'
 */
toggleStatus.post = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:102
 * @route '/admin-dashboard/activity-categories/{activity_category}/toggle-status'
 */
    const toggleStatusForm = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\ActivityCategoryController::toggleStatus
 * @see app/Http/Controllers/Backend/ActivityCategoryController.php:102
 * @route '/admin-dashboard/activity-categories/{activity_category}/toggle-status'
 */
        toggleStatusForm.post = (args: { activity_category: number | { id: number } } | [activity_category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const activityCategories = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
toggleStatus: Object.assign(toggleStatus, toggleStatus),
}

export default activityCategories