/**
 * KOLDOGATE ARCHIVES - APP
 * ========================
 * Interactividad: Modal, Timeline, Búsqueda Fuse.js, Grafo D3.js
 */

// ============================================
// STATE MANAGEMENT
// ============================================
const AppState = {
    disclaimerAccepted: false,
    currentFilter: 'all',
    currentGraphView: 'all',
    searchResults: [],
    fuse: null
};

// ============================================
// DISCLAIMER MODAL
// ============================================
function initDisclaimer() {
    const modal = document.getElementById('disclaimer-modal');
    const acceptBtn = document.getElementById('accept-disclaimer');
    
    // Check if already accepted
    if (localStorage.getItem('koldogate-disclaimer')) {
        modal.classList.add('hidden');
        AppState.disclaimerAccepted = true;
        return;
    }
    
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('koldogate-disclaimer', 'true');
        modal.classList.add('hidden');
        AppState.disclaimerAccepted = true;
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// TIMELINE
// ============================================
function renderTimeline(filter = 'all') {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';
    
    const filteredEvents = filter === 'all' 
        ? timelineEvents 
        : timelineEvents.filter(e => e.type === filter);
    
    filteredEvents.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${event.type}`;
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${event.dateDisplay}</div>
            <div class="timeline-content">
                <span class="timeline-type ${event.type}">${getTypeLabel(event.type)}</span>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                ${event.amount ? `<span class="timeline-amount">${event.amount}</span>` : ''}
            </div>
        `;
        container.appendChild(item);
    });
}

function getTypeLabel(type) {
    const labels = {
        'contrato': 'CONTRATO',
        'judicial': 'JUDICIAL',
        'politico': 'POLÍTICO',
        'investigacion': 'INVESTIGACIÓN'
    };
    return labels[type] || type.toUpperCase();
}

function initTimelineFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            AppState.currentFilter = filter;
            renderTimeline(filter);
        });
    });
}

// ============================================
// ACTORS
// ============================================
function renderActors() {
    const container = document.getElementById('actores-container');
    container.innerHTML = '';
    
    actorsData.forEach(actor => {
        const card = document.createElement('div');
        card.className = 'actor-card';
        card.innerHTML = `
            <div class="actor-header">
                <span class="actor-role ${actor.role}">${getRoleLabel(actor.role)}</span>
                <h3 class="actor-name">${actor.name}</h3>
                <p class="actor-position">${actor.position}</p>
            </div>
            <div class="actor-body">
                <p class="actor-description">${actor.description}</p>
                <div class="actor-status">
                    <span class="status-indicator ${actor.status}"></span>
                    <span>${actor.statusLabel}</span>
                </div>
                ${actor.wikipedia ? `
                    <div class="actor-links">
                        <a href="${actor.wikipedia}" target="_blank" rel="noopener">Ver en Wikipedia →</a>
                    </div>
                ` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

function getRoleLabel(role) {
    const labels = {
        'politico': 'POLÍTICO',
        'empresario': 'EMPRESARIO',
        'intermediario': 'INTERMEDIARIO',
        'funcionario': 'FUNCIONARIO'
    };
    return labels[role] || role.toUpperCase();
}

// ============================================
// SEARCH WITH FUSE.JS
// ============================================
function initSearch() {
    // Initialize Fuse
    AppState.fuse = new Fuse(searchIndexData, {
        keys: ['title', 'description'],
        threshold: 0.4,
        includeScore: true
    });
    
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const resultsSection = document.getElementById('search-results');
    const resultsContainer = document.getElementById('results-container');
    const closeSearchBtn = document.getElementById('close-search');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (!query) return;
        
        const results = AppState.fuse.search(query);
        displayResults(results);
    }
    
    function displayResults(results) {
        resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">No se encontraron resultados.</p>';
        } else {
            results.forEach(({ item, score }) => {
                const resultEl = document.createElement('div');
                resultEl.className = 'result-item';
                resultEl.innerHTML = `
                    <h3><a href="${item.url}">${item.title}</a></h3>
                    <p>${item.description}</p>
                    <span class="result-type">${item.type.toUpperCase()}</span>
                `;
                resultsContainer.appendChild(resultEl);
            });
        }
        
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    closeSearchBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        searchInput.value = '';
    });
}

// ============================================
// D3.JS GRAPH
// ============================================
function initGraph() {
    const container = document.getElementById('graph-container');
    const svg = d3.select('#connection-graph');
    
    // Get container dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    svg
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`);
    
    const root = svg.append('g')
        .attr('class', 'zoom-layer');
    
    const zoom = d3.zoom()
        .scaleExtent([0.6, 2.5])
        .on('zoom', (event) => {
            root.attr('transform', event.transform);
        });
    svg.call(zoom);

    const zoomInBtn = document.getElementById('graph-zoom-in');
    const zoomOutBtn = document.getElementById('graph-zoom-out');
    const zoomResetBtn = document.getElementById('graph-zoom-reset');
    const fullscreenBtn = document.getElementById('graph-fullscreen');

    function zoomBy(factor) {
        svg.transition().duration(200).call(zoom.scaleBy, factor);
    }

    function resetZoom() {
        svg.transition().duration(200).call(zoom.transform, d3.zoomIdentity);
    }

    function toggleFullscreen() {
        const isActive = container.classList.toggle('graph-fullscreen');
        document.body.classList.toggle('graph-fullscreen-open', isActive);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => zoomBy(1.2));
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => zoomBy(0.8));
    }

    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', () => resetZoom());
    }

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => toggleFullscreen());
    }
    
    // Color scale
    const colorScale = {
        'politico': '#f44336',
        'empresario': '#ff6b35',
        'intermediario': '#2196f3',
        'funcionario': '#4caf50',
        'organismo': '#9c27b0'
    };
    
    // Create tooltip
    const tooltip = d3.select('body').append('div')
        .attr('class', 'graph-tooltip');
    
    // Prepare data
    let nodes = [...graphData.nodes];
    let links = [...graphData.links];
    
    // Create simulation (softer and más compacta para pantallas pequeñas)
    const isMobile = window.innerWidth <= 768;
    const linkDistance = isMobile ? 70 : 95;
    const chargeStrength = isMobile ? -180 : -260;
    const centerX = width / 2;
    const centerY = height / 2;

    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(linkDistance))
        .force('charge', d3.forceManyBody().strength(chargeStrength))
        .force('center', d3.forceCenter(centerX, centerY))
        .force('collision', d3.forceCollide().radius(d => d.radius + (isMobile ? 3 : 6)))
        .force('x', d3.forceX(centerX).strength(isMobile ? 0.04 : 0.06))
        .force('y', d3.forceY(centerY).strength(isMobile ? 0.04 : 0.06));
    
    // Create links
    const link = root.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter().append('line')
        .attr('class', 'graph-link')
        .attr('stroke', '#444')
        .attr('stroke-width', d => Math.sqrt(d.value));
    
    // Create nodes
    const node = root.append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(nodes)
        .enter().append('g')
        .attr('class', 'graph-node')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));
    
    // Add circles to nodes
    node.append('circle')
        .attr('r', d => d.radius)
        .attr('fill', d => colorScale[d.group] || '#666')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5)
        .attr('stroke-opacity', 0.3);
    
    // Add labels to nodes
    node.append('text')
        .attr('class', 'node-label')
        .attr('dx', d => d.radius + 5)
        .attr('dy', 4)
        .text(d => d.name);
    
    // Tooltip events
    node.on('mouseover', (event, d) => {
        tooltip.html(`<strong>${d.name}</strong><br>${getGroupLabel(d.group)}`)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px')
            .classed('visible', true);
    })
    .on('mouseout', () => {
        tooltip.classed('visible', false);
    });
    
    // Update positions on tick
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        
        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
    
    // Drag functions
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
    
    // Graph filter buttons
    const graphButtons = document.querySelectorAll('.graph-btn');
    graphButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            graphButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            filterGraph(view, nodes, links, node, link, simulation);
        });
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        svg.attr('width', newWidth).attr('height', newHeight).attr('viewBox', `0 0 ${newWidth} ${newHeight}`);
        simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
        simulation.force('x', d3.forceX(newWidth / 2).strength(isMobile ? 0.04 : 0.06));
        simulation.force('y', d3.forceY(newHeight / 2).strength(isMobile ? 0.04 : 0.06));
        simulation.alpha(0.4).restart();
    });
}

function filterGraph(view, allNodes, allLinks, nodeSelection, linkSelection, simulation) {
    let visibleGroups = [];
    
    switch(view) {
        case 'politicos':
            visibleGroups = ['politico'];
            break;
        case 'empresas':
            visibleGroups = ['empresario', 'organismo'];
            break;
        case 'intermediarios':
            visibleGroups = ['intermediario', 'funcionario'];
            break;
        default:
            visibleGroups = ['politico', 'empresario', 'intermediario', 'funcionario', 'organismo'];
    }
    
    // Filter nodes
    nodeSelection.style('opacity', d => {
        return visibleGroups.includes(d.group) ? 1 : 0.1;
    });
    
    // Filter links
    linkSelection.style('opacity', d => {
        const sourceVisible = visibleGroups.includes(d.source.group);
        const targetVisible = visibleGroups.includes(d.target.group);
        return (sourceVisible && targetVisible) ? 0.4 : 0.05;
    });
    
    // Restart simulation
    simulation.alpha(0.3).restart();
}

function getGroupLabel(group) {
    const labels = {
        'politico': 'Político',
        'empresario': 'Empresario',
        'intermediario': 'Intermediario',
        'funcionario': 'Funcionario',
        'organismo': 'Organismo/Empresa'
    };
    return labels[group] || group;
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });
    
    // Observe actor cards
    document.querySelectorAll('.actor-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Observe fuente cards
    document.querySelectorAll('.fuente-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
}

// Add CSS for fade-in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(fadeInStyle);

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Press '/' to focus search
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }
        
        // Press 'Escape' to close search results
        if (e.key === 'Escape') {
            document.getElementById('search-results').classList.add('hidden');
            document.getElementById('search-input').blur();
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initDisclaimer();
    initNavigation();
    renderTimeline();
    initTimelineFilters();
    renderActors();
    initSearch();
    initGraph();
    initScrollAnimations();
    initKeyboardShortcuts();
    
    console.log('[KGA] KoldoGate Archives initialized');
    console.log('[KGA] Timeline events:', timelineEvents.length);
    console.log('[KGA] Actors:', actorsData.length);
    console.log('[KGA] Graph nodes:', graphData.nodes.length);
    console.log('[KGA] Press "/" to search, "Esc" to close');
});
