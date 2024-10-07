import * as React from 'react';
import {
  Dropdown,
  DropdownList,
  MenuToggle,
  DropdownItem,
  Flex,
  FlexItem,
} from '@patternfly/react-core';
import { useNavigate } from 'react-router';
import { ModelState, RegisteredModel } from '~/app/types';
import { ModelRegistryContext } from '~/app/context/ModelRegistryContext';
import { ModelRegistrySelectorContext } from '~/app/context/ModelRegistrySelectorContext';
import { ArchiveRegisteredModelModal } from '~/app/pages/modelRegistry/screens/components/ArchiveRegisteredModelModal';
import { registeredModelsUrl } from '~/app/pages/modelRegistry/screens/routeUtils';

interface ModelVersionsHeaderActionsProps {
  rm: RegisteredModel;
}

const ModelVersionsHeaderActions: React.FC<ModelVersionsHeaderActionsProps> = ({ rm }) => {
  const { apiState } = React.useContext(ModelRegistryContext);
  const { preferredModelRegistry } = React.useContext(ModelRegistrySelectorContext);

  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false);
  const tooltipRef = React.useRef<HTMLButtonElement>(null);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = React.useState(false);

  return (
    <>
      <Flex>
        <FlexItem>
          <Dropdown
            isOpen={isOpen}
            onSelect={() => setOpen(false)}
            onOpenChange={(open) => setOpen(open)}
            popperProps={{ position: 'end' }}
            toggle={(toggleRef) => (
              <MenuToggle
                variant="primary"
                ref={toggleRef}
                onClick={() => setOpen(!isOpen)}
                isExpanded={isOpen}
                aria-label="Model version action toggle"
                data-testid="model-version-action-toggle"
              >
                Actions
              </MenuToggle>
            )}
          >
            <DropdownList>
              <DropdownItem
                id="archive-model-button"
                aria-label="Archive model"
                key="archive-model-button"
                onClick={() => setIsArchiveModalOpen(true)}
                ref={tooltipRef}
              >
                Archive model
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        </FlexItem>
      </Flex>
      <ArchiveRegisteredModelModal
        onCancel={() => setIsArchiveModalOpen(false)}
        onSubmit={() =>
          apiState.api
            .patchRegisteredModel(
              {},
              {
                state: ModelState.ARCHIVED,
              },
              rm.id,
            )
            .then(() => navigate(registeredModelsUrl(preferredModelRegistry?.name)))
        }
        isOpen={isArchiveModalOpen}
        registeredModelName={rm.name}
      />
    </>
  );
};

export default ModelVersionsHeaderActions;